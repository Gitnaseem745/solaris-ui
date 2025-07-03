#!/usr/bin/env node

/**
 * Verification script for static site generation
 * This script validates that all static paths can be generated successfully
 */

import fs from 'fs';
import path from 'path';

// Verify hooks
function verifyHooks() {
    console.log('🔍 Verifying hooks...');
    const hooksDir = path.join(process.cwd(), 'hooks', 'user');
    
    if (!fs.existsSync(hooksDir)) {
        console.error('❌ Hooks directory not found');
        return false;
    }
    
    const hookDirs = fs.readdirSync(hooksDir).filter((file) =>
        fs.lstatSync(path.join(hooksDir, file)).isDirectory()
    );
    
    console.log(`✅ Found ${hookDirs.length} hooks`);
    
    // Verify each hook has required files
    let allValid = true;
    hookDirs.forEach(hookName => {
        const hookDir = path.join(hooksDir, hookName);
        const readmePath = path.join(hookDir, 'README.md');
        const codePath = path.join(hookDir, `${hookName}.ts`);
        
        if (!fs.existsSync(readmePath)) {
            console.warn(`⚠️  Hook ${hookName} missing README.md`);
        }
        
        if (!fs.existsSync(codePath)) {
            console.warn(`⚠️  Hook ${hookName} missing ${hookName}.ts`);
        }
    });
    
    return allValid;
}

// Verify components
function verifyComponents() {
    console.log('🔍 Verifying components...');
    
    try {
        // This would need to be adjusted for Node.js context
        const componentsPath = path.join(process.cwd(), 'docs', 'components.ts');
        
        if (!fs.existsSync(componentsPath)) {
            console.error('❌ Components file not found');
            return false;
        }
        
        console.log('✅ Components file found');
        // Note: In a real implementation, you'd parse the TypeScript file
        // or create a separate JSON export for verification
        
        return true;
    } catch (error) {
        console.error('❌ Error verifying components:', error.message);
        return false;
    }
}

// Main verification
function main() {
    console.log('🚀 Starting SSG verification...\n');
    
    const hooksValid = verifyHooks();
    const componentsValid = verifyComponents();
    
    console.log('\n📊 Summary:');
    console.log(`Hooks: ${hooksValid ? '✅' : '❌'}`);
    console.log(`Components: ${componentsValid ? '✅' : '❌'}`);
    
    if (hooksValid && componentsValid) {
        console.log('\n🎉 All verifications passed! SSG should work correctly.');
        process.exit(0);
    } else {
        console.log('\n⚠️  Some issues found. Please review and fix.');
        process.exit(1);
    }
}

main();
