import express from 'express';
import listingController from '../controllers/listingController';

const router = express.router();

router.get('/', listingController.getFullList);

export default router;
