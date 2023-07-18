const canvas = document.querySelector('#canvas');

function clock() {
  const now = new Date();
  const ctx = canvas.getContext('2d');

  const faceColor = document.querySelector('#face-color').value;
  const borderColor = document.querySelector('#border-color').value;
  const lineColor = document.querySelector('#line-color').value;
  const largeHandsColor = document.querySelector('#large-hand-color').value;
  const secondHandColor = document.querySelector('#second-hand-color').value;

  // Setup canvas
  ctx.save(); // save default state
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); // put {0,0} in the middle
  ctx.rotate(-Math.PI / 2); // rotate clock -90deg

  // Set default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = faceColor;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw clock border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw hour lines
  ctx.save()
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 6;
  for (let i = 0; i < 12; i++) {
    ctx.rotate(Math.PI / 6)
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore()

  // Draw minutes lines
  ctx.save()
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2;
  for (let i = 0; i < 60; i++) {
    ctx.rotate(Math.PI / 30)
    ctx.beginPath();
    ctx.moveTo(105, 0);
    ctx.lineTo(115, 0);
    ctx.stroke();
  }
  ctx.restore()

  // Get current time
  const hour = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // Draw hour hand 
  ctx.save();
  ctx.lineWidth = 10;
  ctx.strokeStyle = largeHandsColor;
  ctx.rotate(
    (Math.PI * 2 / 12 * hour) +
    (Math.PI / 360 * min) +
    (Math.PI / 21600 * sec)
  );
  ctx.beginPath();
  ctx.moveTo(-10, 0);
  ctx.lineTo(85, 0);
  ctx.stroke();
  ctx.restore();

  // Draw minute hand 
  ctx.save();
  ctx.lineWidth = 7;
  ctx.strokeStyle = largeHandsColor;
  ctx.rotate(
    (Math.PI * 2 / 60 * min) +
    (Math.PI * 2 / 3600 * sec)
  );
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.restore();

  // Draw second hand 
  ctx.save();
  ctx.lineWidth = 3;
  ctx.strokeStyle = secondHandColor;
  ctx.rotate(
    (Math.PI * 2 / 60 * sec)
  );
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();

  // Draw circle in the midle
  ctx.fillStyle = secondHandColor;
  ctx.arc(0, 0, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.restore(); // restore default state

  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

document.querySelector('#save-btn').addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/jpg');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataURL;
  link.click();
});