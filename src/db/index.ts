
import users from './data/users.json'

const data = users as UserList

export function newRecord(user: { chatId: number, userId: number }): void {
  data.users.push(user)
}

export function destroyRecord(chatId: number): void {
  const idx = data.users.findIndex((user) => user.chatId === chatId)
  if(idx !== -1) data.users.splice(idx, 1)
}

