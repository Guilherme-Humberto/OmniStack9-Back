import { Router } from 'express'
import multer from "multer";

import uploadConfig from '../config/multer'
import SessionController from '../controller/SessionController'
import SpotController from '../controller/SpotController'
import DashboardController from '../controller/DashboardController'
import BookingController from '../controller/BookingController'

const upload = multer(uploadConfig)
const router = Router()

router.post('/session', SessionController.store )
router.get('/spots', SpotController.index )
router.post('/spots', upload.single('thumbnail'), SpotController.store )
router.post('/dashboard', DashboardController.show )
router.post('/spots/:spot_id/bookings', BookingController.store )

export default router