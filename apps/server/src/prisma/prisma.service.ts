import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  }
}

// import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient().$extends({

//   result: {
//     user: {
//       createdAt: {
//         needs: { createdAt: true },
//         compute({ createdAt }) {
//           return new Date(createdAt)
//         },
//       },
//       updatedAt: {
//         needs: { updatedAt: true },
//         compute({ updatedAt }) {
//           return new Date(updatedAt)
//         },
//       },
//       deletedAt: {
//         needs: { deletedAt: true },
//         compute({ deletedAt }) {
//           return new Date(deletedAt)
//         },
//       },
//     },
//   },
// })

// @Injectable()
// export class PrismaService implements OnModuleInit {
//   async onModuleInit() {
//     await prisma.$connect()
//   }

//   async onModuleDestroy() {
//     await prisma.$disconnect()
//   }

//   get client() {
//     return prisma
//   }
// }
