const imageResizeCrop = (inputImage) => {
  const reader = new FileReader();
  reader.readAsDataURL(inputImage);

  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const targetWidth = 160;
        const targetHeight = 100;
        const targetRatio = targetHeight / targetWidth;

        const imgOrientation = img.width >= img.height ? 'landscape' : 'portrait';
        const imgRatio = img.height / img.width;

        const sourceWidth = imgRatio <= targetRatio ? img.width * targetRatio : img.width;
        const sourceHeight = imgRatio <= targetRatio ? img.height : img.width * targetRatio;
        const sourceX = 0;
        const sourceY = imgOrientation === 'landscape' ? 0 : img.height / 2 - sourceHeight / 2;
        const targetX = 0;
        const targetY = 0;

        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img,
          sourceX, sourceY,
          sourceWidth, sourceHeight,
          targetX, targetY,
          targetWidth, targetHeight);
        const outputImage = ctx.canvas.toDataURL('image/png', 1).replace('image/png', 'image/octet-stream');
        resolve(outputImage);
      };
      reader.onerror = (error) => reject(error);
    };
  });
};

export default imageResizeCrop;
