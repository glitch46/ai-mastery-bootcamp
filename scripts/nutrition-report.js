#!/usr/bin/env node
// Nightly Nutrition Accountability Report
// Runs at 10 PM daily via cron

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, '../nutrition-tracker-local/nutrition.db'));
const TARGETS = { cal: 1600, pro: 150, carb: 150, fat: 70 };

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function generateAnalysis(totals) {
  const calDiff = totals.cal - TARGETS.cal;
  const proDiff = totals.pro - TARGETS.pro;
  const carbDiff = totals.carb - TARGETS.carb;
  const fatDiff = totals.fat - TARGETS.fat;
  
  let analysis = [];
  
  // Calorie analysis
  if (calDiff > 200) {
    analysis.push("📈 Over by " + calDiff + " calories. Tomorrow: lighter breakfast or skip the snack.");
  } else if (calDiff < -300) {
    analysis.push("📉 Under by " + Math.abs(calDiff) + " calories. You're in deficit mode — good for fat loss, but don't starve.");
  } else {
    analysis.push("✅ On target with calories. Disciplined.");
  }
  
  // Protein analysis
  if (totals.pro >= TARGETS.pro) {
    analysis.push("💪 Hit protein goal. Muscles fed.");
  } else if (totals.pro >= TARGETS.pro * 0.8) {
    analysis.push("🟡 Close on protein (" + totals.pro + "g). Add Greek yogurt or shake tomorrow.");
  } else {
    analysis.push("⚠️ Low on protein (" + totals.pro + "g). Prioritize protein at every meal tomorrow.");
  }
  
  // Carb/Fat balance
  if (carbDiff > 30) {
    analysis.push("🍞 High carbs today. Watch the sugars tomorrow.");
  }
  if (fatDiff < -20) {
    analysis.push("🥑 Low fat intake. Add nuts, avocado, or olive oil.");
  }
  
  return analysis.length > 0 ? analysis.join('\n') : '⚖️ Balanced day.';
}

function getMealEmoji(mealType) {
  const emojis = {
    breakfast: '🌅',
    lunch: '☀️',
    dinner: '🌙',
    snack: '🍿'
  };
  return emojis[mealType] || '🍽️';
}

async function generateReport() {
  const today = getToday();
  
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM nutrition_entries WHERE date = ? ORDER BY meal_type, created_at', [today], (err, rows) => {
      if (err) {
        reject(err);
        db.close();
        return;
      }
      
      if (rows.length === 0) {
        resolve("🚨 NO FOOD LOGGED TODAY\n\nWhat happened? Forgot to track or actually didn't eat?\n\nLog your meals tomorrow or I'll start asking uncomfortable questions.");
        db.close();
        return;
      }
      
      // Group by meal
      const meals = { breakfast: [], lunch: [], dinner: [], snack: [] };
      rows.forEach(r => {
        if (meals[r.meal_type]) meals[r.meal_type].push(r);
      });
      
      // Calculate totals
      const totals = rows.reduce((acc, r) => ({
        cal: acc.cal + r.calories,
        pro: acc.pro + r.protein,
        carb: acc.carb + r.carbs,
        fat: acc.fat + r.fat
      }), {cal: 0, pro: 0, carb: 0, fat: 0});
      
      let report = `🌙 NUTRITION ACCOUNTABILITY REPORT\n`;
      report += `📅 Date: ${today}\n`;
      report += `⏰ Time: 10:00 PM (End of Day)\n\n`;
      
      // Meals breakdown
      ['breakfast', 'lunch', 'dinner', 'snack'].forEach(meal => {
        if (meals[meal].length > 0) {
          const mealCal = meals[meal].reduce((a, r) => a + r.calories, 0);
          report += `${getMealEmoji(meal)} ${meal.toUpperCase()} (${mealCal} cal):\n`;
          meals[meal].forEach(r => {
            report += `   • ${r.food_name}\n`;
            report += `     └─ ${r.calories} cal | P:${r.protein}g C:${r.carbs}g F:${r.fat}g\n`;
          });
          report += '\n';
        }
      });
      
      // Totals section
      report += `═══════════════════════════════════════════\n`;
      report += `📊 FINAL SCORECARD\n`;
      report += `═══════════════════════════════════════════\n`;
      report += `Calories: ${totals.cal} / ${TARGETS.cal}  (${totals.cal >= TARGETS.cal ? '+' : ''}${totals.cal - TARGETS.cal})\n`;
      report += `Protein:  ${totals.pro}g / ${TARGETS.pro}g  (${totals.pro >= TARGETS.pro ? '+' : ''}${totals.pro - TARGETS.pro}g)\n`;
      report += `Carbs:    ${totals.carb}g / ${TARGETS.carb}g  (${totals.carb >= TARGETS.carb ? '+' : ''}${totals.carb - TARGETS.carb}g)\n`;
      report += `Fat:      ${totals.fat}g / ${TARGETS.fat}g    (${totals.fat >= TARGETS.fat ? '+' : ''}${totals.fat - TARGETS.fat}g)\n`;
      report += `═══════════════════════════════════════════\n\n`;
      
      // Analysis
      report += `💡 GILFOYLE'S ANALYSIS:\n`;
      report += generateAnalysis(totals);
      report += `\n\n`;
      
      // Tomorrow's target
      const remaining = {
        cal: TARGETS.cal - totals.cal,
        pro: TARGETS.pro - totals.pro,
        carb: TARGETS.carb - totals.carb,
        fat: TARGETS.fat - totals.fat
      };
      
      if (remaining.cal > 0) {
        report += `📋 TOMORROW'S GOAL:\n`;
        report += `Make up ${remaining.cal} calories, ${remaining.pro}g protein.\n`;
      }
      
      report += `\nSleep well. Tomorrow we train — body and mind.\n`;
      report += `— Gilfoyle 😈`;
      
      db.close();
      resolve(report);
    });
  });
}

// Run if called directly
if (require.main === module) {
  generateReport()
    .then(report => console.log(report))
    .catch(err => {
      console.error('Error generating report:', err);
      process.exit(1);
    });
}

module.exports = { generateReport };
