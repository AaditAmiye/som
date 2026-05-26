import cv2
import numpy as np

image = cv2.imread('chocotob.jpg')
hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

# Define color range for background (tweak as needed)
lower = np.array([36, 25, 25])
upper = np.array([86, 255,255])

# Create mask and invert it
mask = cv2.inRange(hsv, lower, upper)
mask_inv = cv2.bitwise_not(mask)

# Apply mask to keep only foreground
result = cv2.bitwise_and(image, image, mask=mask_inv)

cv2.imwrite('chocotobs.jpg', result)
