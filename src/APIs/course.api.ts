import { parseFilter } from '@utils'
import AxiosClient from './api'
import END_POINT from './constants'

function getCourses({ params }: any) {
  params = parseFilter(params)
  return AxiosClient.get(END_POINT.COURSE_LIST, '', { params })
    .then((res) => res.data)
}

function getCourse({ courseId }: any) {
  return AxiosClient.get(`${END_POINT.COURSE}/${courseId}`)
    .then((res) => res.data)
}

function createCourse({ data }: any) {
  return AxiosClient.post(END_POINT.CREATE_COURSE, data)
    .then((res) => res.data)
}

function editCourse({ courseId, data }: any) {
  return AxiosClient.patch(`${END_POINT.UPDATE_COURSE}/${courseId}`, data)
    .then((res) => res.data)
}

function deleteCourse({ courseId }: any) {
  return AxiosClient.delete(`${END_POINT.UPDATE_COURSE}/${courseId}`)
    .then((res) => res.data)
}

export {
  getCourses,
  getCourse,
  createCourse,
  editCourse,
  deleteCourse
}
