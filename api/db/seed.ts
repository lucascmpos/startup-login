const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.company.deleteMany()
  await prisma.user.deleteMany()

  const defaultUser = await prisma.user.create({
    data: {
      email: 'default.user@example.com',
      first_name: 'Default',
      last_name: 'User',
      dedication: 'Full-time',
    },
  })

  await prisma.company.create({
    data: {
      name: 'Tech Innovators',
      description: 'A company that innovates technology.',
      website: 'https://techinnovators.example.com',
      businessModel: 'B2B',
      foundation: new Date('2020-01-01'),
      team_size: 10,
      opportunities: ['AI', 'Blockchain'],
      openings: ['Software Engineer', 'Product Manager'],
      userId: defaultUser.id,
    },
  })

  console.log('Seed success')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
