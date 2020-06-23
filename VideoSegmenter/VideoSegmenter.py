import numpy as np
import cv2
from azure.cognitiveservices.vision.customvision.prediction import CustomVisionPredictionClient
from io import BufferedReader
import geocoder
import pyodbc
from datetime import date

prediction_key = "c4c260e1c926457bb309806f0bce1f60"
#ENDPOINT = "https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/6b3322f2-3b32-4b0c-8fb5-38b7be0c4177/detect/iterations/Iteration2/image"
ENDPOINT = "https://southcentralus.api.cognitive.microsoft.com/"
predictor = CustomVisionPredictionClient(prediction_key, endpoint=ENDPOINT)

def getPredictions(img, imgHeight, imgWidth):

is_success, im_buf_arr = cv2.imencode(".jpg", img)
byte_im = im_buf_arr.tobytes()

print(type(byte_im))

# data = BufferedReader(img)
# with open(data, mode="rb") as test_data:
# print(type(test_data))
# print(type(data))
# results = predictor.detect_image("6b3322f2-3b32-4b0c-8fb5-38b7be0c4177", "Iteration2", test_data)
results = predictor.detect_image("6b3322f2-3b32-4b0c-8fb5-38b7be0c4177", "Iteration4", byte_im)
bbox = []
for prediction in results.predictions:
if(prediction.probability > 0.3):
bbox.append([int(prediction.bounding_box.left*imgWidth), int(prediction.bounding_box.top*imgHeight), (int(prediction.bounding_box.left*imgWidth)+int(prediction.bounding_box.width*imgWidth)), (int(prediction.bounding_box.top*imgHeight)+int(prediction.bounding_box.height*imgHeight))])
# bbox.append([int(prediction.bounding_box.left*100), int(prediction.bounding_box.top*100), (int(prediction.bounding_box.left*100)+int(prediction.bounding_box.width*100)), (int(prediction.bounding_box.top*100)+int(prediction.bounding_box.height*100))])

print(bbox)
return bbox
# print("\t" + prediction.tag_name + ": {0:.2f}% bbox.left = {1:.2f}, bbox.top = {2:.2f}, bbox.width = {3:.2f}, bbox.height = {4:.2f}".format(prediction.probability * 100, prediction.bounding_box.left, prediction.bounding_box.top, prediction.bounding_box.width, prediction.bounding_box.height))


def draw_rects(img, rects, color):
for x1, y1, x2, y2 in rects:

#driver= sorted(pyodbc.drivers()).pop()
driver='/usr/local/lib/libtdsodbc.so'
connection = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = connection.cursor()
SQLCommand = ("INSERT INTO potholes (Latitude, Longitude, IsActive, CreatedTime, Probability, image) VALUES (?,?,?,?,?,?)",("13.232",'14.2323',1, str(date.today(), 43)))
cursor.execute(SQLCommand)
connection.commit()
connection.close()
# cursor = cnxn.cursor()
# # cursor.execute("SELECT TOP 20 pc.Name as CategoryName, p.name as ProductName FROM [SalesLT].[ProductCategory] pc JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid")
# cursor.execute("SELECT TOP 20 pc.Name as CategoryName, p.name as ProductName FROM [SalesLT].[ProductCategory] pc JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid")
# row = cursor.fetchone()
# while row:
# print (str(row[0]) + " " + str(row[1]))
# row = cursor.fetchone()

if __name__ == '__main__':
import sys, getopt

# args, video_src = getopt.getopt(sys.argv[1:], '', ['cascade=', 'nested-cascade='])

# args = dict(args)


# cam = create_capture(video_src, fallback='synth:bg=../data/lena.jpg:noise=0.05')
cam = cv2.VideoCapture("video1.mp4")
count = 0
rects=[]

cnt = 0
while True:
# cam.set(cv2.CAP_PROP_POS_MSEC,1000)
ret, img = cam.read()
cnt += 1
count += 1
if(count==3):
count = 0
print(type(ret))
print(type(img))
# img = cv2.imread('pothole.jpg')
# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# gray = cv2.equalizeHist(gray)

# t = clock()
vis = img.copy()
if(count==0):
rects = rects = getPredictions(img, img.shape[0], img.shape[1])
if(len(rects) != 0):
draw_rects(vis, rects, (0, 255, 0))
# enterInDb(vis)

# if not nested.empty():
# for x1, y1, x2, y2 in rects:
# roi = gray[y1:y2, x1:x2]
# vis_roi = vis[y1:y2, x1:x2]
# subrects = detect(roi.copy(), nested)
# draw_rects(vis_roi, subrects, (255, 0, 0))
# dt = clock() - t

# draw_str(vis, (20, 20), 'time: %.1f ms' % (dt*1000))
cv2.imshow('potholeDetector', vis)
# cv2.imwrite('frames/frame'+str(cnt)+".png",img)

if cv2.waitKey(5) == 27:
break
cv2.destroyAllWindows()