import express from "express";
import { checkCourseRules } from "../validators/CourseValidator.js";
import ValidationMiddleware from "../middlewares/ValidationMiddleware.js";
import {
  updateCourse,
  getCourses,
  getCourseById,
} from "../controllers/CourseController.js";

const router = express.Router();

// To update a course
router.put(
  "/courses/update/:id",
  checkCourseRules(),
  ValidationMiddleware,
  updateCourse
);

// To view all courses
router.get("/courses", getCourses);

// To view a course details
router.get("/courses/:id", getCourseById);

export default router;
