import { v4 as uuidv4 } from 'uuid'

export const randomId = () => {
   return uuidv4().slice(0, 28)
}