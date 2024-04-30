import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Input, Select, Text, useDisclosure } from "@chakra-ui/react"
import { TaskProps } from '../models/task';
import { Layout, Modal } from "../components"
import { labelOptions } from '../helpers/constants';
import { useTaskStore } from '../helpers/hooks';
import { TaskSchema } from '../helpers/validations';

const FormTask: React.FC = () => {
  const { tasks, addTask, editTask } = useTaskStore((state) => state)
  const disclosure = useDisclosure()
  const { id } = useParams()
  const navigate = useNavigate()
  const { onOpen, onClose } = disclosure
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: id ? (tasks.find((r) => r.id === id)?.id || '') : '',
      title: id ? (tasks.find((r) => r.id === id)?.title || '') : '',
      dueDate: id ? (tasks.find((r) => r.id === id)?.dueDate || '') : '',
      label: id ? (tasks.find((r) => r.id === id)?.label || 'open') : 'open',
      isComplete: false
    },
    validationSchema: TaskSchema,
    onSubmit: (values: TaskProps) => {
      if (id) {
        editTask(values)
        navigate('/')
      } else {
        addTask({ ...values, id: uuidv4() })
        navigate('/')
      }
    },
  });

  return (
    <Layout>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Box p={2}>
            <Text>Title</Text>
            <Input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title && formik.touched.title &&
              <Text fontSize={12} color={'#d63031'}>{formik.errors.title}</Text>
            }
          </Box>
          <Box p={2}>
            <Text>Due Date</Text>
            <Input
              id="dueDate"
              name="dueDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dueDate}
            />
            {formik.errors.dueDate && formik.touched.dueDate &&
              <Text fontSize={12} color={'#d63031'}>{formik.errors.title}</Text>
            }
          </Box>
          <Box p={2}>
            <Text>Label</Text>
            <Select
              id="label"
              name="label"
              onChange={formik.handleChange}
              value={formik.values.label}
            >
              {labelOptions.map(({ label, value }) => (
                <option value={value}>{label}</option>
              ))}
            </Select>
            {formik.errors.label && formik.touched.label &&
              <Text fontSize={12} color={'#d63031'}>{formik.errors.title}</Text>
            }
          </Box>
          <Box p={2}>
            <Button type="button" onClick={onOpen}>Submit</Button>
          </Box>
          <Modal disclosure={disclosure}
            title={id ? "Edit" : "Add"}
            content={
              <Box>
                Are you sure want submit data?
              </Box>
            }
            footer={
              <Box display={'flex'} gap={2}>
                <Button onClick={onClose}>Cancel</Button>
                <Button bg={'#00b894'} color={'white'} onClick={() => {
                  formik.submitForm()
                  onClose()
                }}>Yes</Button>
              </Box>
            }
          />
        </form>
      </Box>
    </Layout>
  )
}

export default FormTask