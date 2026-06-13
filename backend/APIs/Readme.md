## Backend Setup

npm init -y

npm install express mongoose dotenv cors cookie-parser bcryptjs jsonwebtoken socket.io

npm install -D nodemon

backend/

APIs/
├── auth_api.js
├── customer_api.js
├── rider_api.js
├── store_api.js
├── order_api.js
└── admin_api.js

middleware/
├── VerifyToken.js
└── RoleAuth.js

models/
├── UserModel.js
├── StoreModel.js
├── ProductModel.js
├── CartModel.js
├── OrderModel.js
├── RiderLocationModel.js
├── EarningsModel.js
└── NotificationModel.js

sockets/
utils/

server.js
.env

UserModel
StoreModel
ProductModel
CartModel
OrderModel
RiderLocationModel
EarningsModel
NotificationModel