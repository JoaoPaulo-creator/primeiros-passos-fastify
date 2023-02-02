import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
    await prisma.carModel.deleteMany()
    
    await prisma.carModel.create({
        data: {
            name: 'oniyx',
            color: 'white',
            version: 'joy',
            plate: '11FGB34',
            createdAt: new Date('2023-02-01T00:00:.000z')
        }
    })
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
