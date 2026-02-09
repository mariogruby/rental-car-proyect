import "dotenv/config"
import prisma from"@/lib/db";

async function main() {
    const OLD_USER_ID = "user_36eL1i9zbdHEkI1qbPm8OMycvFC"
    const NEW_USER_ID = "user_394nNWE3GqWasqHBqyigw0LchJd"

    const res = await prisma.car.updateMany({
        where: {userId: OLD_USER_ID},
        data: {userId: NEW_USER_ID}
    });

    console.log(`updated ${res.count} cars`);
}

main()
.catch(console.error)
.finally(()=>prisma.$disconnect())