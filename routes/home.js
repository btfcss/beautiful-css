import express from 'express';
const router = express.Router();



// A question is requested
router.get('/', async (req, res, next) => {

  console.log ('\n\n----- Home route -----'); 

  res.render('home');
});


export default router;