#!/usr/bin/env node

/**
 * Skill Discovery Script
 * Automatically discovers and lists available skills for AI agents
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = '.skills';

function discoverSkills() {
  if (!fs.existsSync(SKILLS_DIR)) {
    console.log('No skills directory found');
    return [];
  }

  const skillFiles = fs.readdirSync(SKILLS_DIR)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(SKILLS_DIR, file));

  const skills = [];

  skillFiles.forEach(skillFile => {
    try {
      const content = fs.readFileSync(skillFile, 'utf8');
      const lines = content.split('\n');
      
      let title = '';
      let description = '';
      let whenToUse = '';
      
      // Parse markdown headers
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('# ') && !title) {
          title = line.substring(2);
        } else if (line.startsWith('## Description')) {
          // Get the next non-empty line
          for (let j = i + 1; j < lines.length; j++) {
            if (lines[j].trim()) {
              description = lines[j].trim();
              break;
            }
          }
        } else if (line.startsWith('## When to Use')) {
          // Collect bullet points
          const useCases = [];
          for (let j = i + 1; j < lines.length; j++) {
            const useLine = lines[j].trim();
            if (useLine.startsWith('- ')) {
              useCases.push(useLine.substring(2));
            } else if (useLine.startsWith('## ')) {
              break;
            }
          }
          whenToUse = useCases.join(', ');
        }
      }
      
      skills.push({
        file: skillFile,
        title,
        description,
        whenToUse
      });
    } catch (error) {
      console.error(`Error reading skill file ${skillFile}:`, error.message);
    }
  });

  return skills;
}

function displaySkills(skills) {
  console.log('\n🎯 Available AEM Skills\n');
  console.log('========================\n');
  
  skills.forEach(skill => {
    console.log(`**${skill.title}**`);
    console.log(`${skill.description}\n`);
    if (skill.whenToUse) {
      console.log(`*Use when:* ${skill.whenToUse}\n`);
    }
    console.log(`📁 ${skill.file}\n`);
    console.log('---\n');
  });
}

// Main execution
if (require.main === module) {
  const skills = discoverSkills();
  
  if (skills.length === 0) {
    console.log('No skills found in the .skills directory');
    process.exit(1);
  }
  
  displaySkills(skills);
  
  console.log(`\n✅ Found ${skills.length} skills total`);
  console.log('\nTo use these skills, mention them in your prompts to AI agents.');
  console.log('Example: "Use the Content Driven Development skill to build a new hero block"\n');
}

module.exports = { discoverSkills, displaySkills };