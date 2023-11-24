// schema.prismaのUserテーブルにデフォルトユーザを作成する
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const userId = "clp2o5pnx00004tkeaxbs54lv"
  const user = await prisma.user.create({
    data: {
      id: userId, // デフォルトユーザーID
      name: "山田太郎",
      email: "taro@example.com",
      emailVerified: null, // emailVerifiedフィールドがNULLを許容している場合
      image: null, // imageフィールドがNULLを許容している場合
      // 他の必要なデータをここに記述します
    },
  })
  const todo = await prisma.todo.create({
    data: {
      title: "Todo1",
      userId: userId,
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
