import express from 'express';
import multer from 'multer';
import uploadConfig from '../config/multer';

import SessionController from '../controller/SessionController';
import SpotController from '../controller/SpotController';
import DashboardController from '../controller/DashboardController';
import BookingController from '../controller/BookingController';
// import ApprovalController from '../controllers/ApprovalController';
// import RejectionController from '../controllers/RejectionController';

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

// routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
// routes.post('/bookings/:booking_id/rejections', RejectionController.store);

export { routes }