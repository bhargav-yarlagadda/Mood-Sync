import * as faceapi from 'face-api.js';

// Load face detection and expression models
export const loadModels = async () => {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
  await faceapi.nets.faceExpressionNet.loadFromUri('/models');
};

// Detect facial expressions
export const detectExpression = async (video: HTMLVideoElement) => {
  const detection = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();

  if (detection && detection.expressions) {
    
    // Get the expression with the highest probability
    return Object.entries(detection.expressions).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  }
  return 'default';
};
