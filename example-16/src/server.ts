import { z } from 'zod'

const userSchema = z.object({
  name: z.string()
    .min(3, { message: 'O nome precisa de 3 caracteres' })
    .transform(value => value.toLocaleUpperCase()),
  age: z.number().min(18, { message: 'Você precisa ser maior de idade' })
})

type User = z.infer<typeof userSchema>

function saveUser(user: User) {
  const { name, age } = userSchema.parse(user)

  console.log(name, age)
}

saveUser({ name: 'Bart', age: 20 })