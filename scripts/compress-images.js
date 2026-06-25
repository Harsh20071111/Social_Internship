const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const compressImages = async () => {
  try {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const stats = fs.statSync(inputPath);
      
      if (stats.isFile() && /\.(jpe?g|png|webp)$/i.test(file)) {
        console.log(`Optimizing: ${file}`);
        
        // Generate WebP
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(path.join(outputDir, `${path.parse(file).name}.webp`));
          
        // Generate AVIF
        await sharp(inputPath)
          .avif({ quality: 65 })
          .toFile(path.join(outputDir, `${path.parse(file).name}.avif`));
          
        // Compress Original (if PNG/JPG)
        if (/\.(jpe?g|png)$/i.test(file)) {
            await sharp(inputPath)
              .resize({ width: 2560, withoutEnlargement: true })
              .toFile(path.join(outputDir, file));
        }
      }
    }
    console.log('Optimization complete! Check public/images/optimized');
  } catch (err) {
    console.error('Error during optimization:', err);
    console.log('\nMake sure to install sharp: npm install sharp --save-dev');
  }
};

compressImages();
