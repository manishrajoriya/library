const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  // Generate fake admin data
  const admin = await prisma.admin.create({
    data: {
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
    },
  });

  // Generate fake plans
  const plan1 = await prisma.plan.create({
    data: {
      name: "Basic Plan",
      description: "This is a basic plan.",
      duration: 30,
      amount: 50.0,
    },
  });
  const plan2 = await prisma.plan.create({
    data: {
      name: "Premium Plan",
      description: "This is a premium plan with more features.",
      duration: 90,
      amount: 150.0,
    },
  });

  // Generate fake members
  for (let i = 0; i < 5; i++) {
    const member = await prisma.member.create({
      data: {
        name: faker.name.fullName(),
        address: faker.address.streetAddress(),
        contactNumber: faker.phone.number('##########'),
        email: faker.internet.email(),
        addmissionDate: faker.date.past(),
        expiryDate: faker.date.future(),
        status: i % 2 === 0 ? 'LIVE' : 'EXPIRED',
        profileImage: faker.image.avatar(),
        planId: i % 2 === 0 ? plan1.id : plan2.id,
      },
    });

    // Generate fee collections for each member
    await prisma.feeCollection.create({
      data: {
        memberId: member.id,
        amountPaid: faker.datatype.number({ min: 20, max: 100 }),
        totalAmount: 100,
        dueAmount: faker.datatype.number({ min: 0, max: 50 }),
        dueDate: faker.date.future(),
        status: i % 2 === 0 ? 'PAID' : 'PENDING',
      },
    });

    // Generate reminders
    await prisma.reminder.create({
      data: {
        memberId: member.id,
        message: faker.lorem.sentence(),
        dueDate: faker.date.future(),
      },
    });

    // Generate follow-ups
    await prisma.followUp.create({
      data: {
        memberId: member.id,
        followUpDate: faker.date.future(),
      },
    });

    // Generate attendance records
    for (let j = 0; j < 10; j++) {
      await prisma.attendance.create({
        data: {
          memberId: member.id,
          date: faker.date.recent(),
          status: j % 2 === 0 ? 'PRESENT' : 'ABSENT',
        },
      });
    }
  }

  // Generate fake expenses
  for (let k = 0; k < 5; k++) {
    await prisma.expense.create({
      data: {
        description: faker.lorem.sentence(),
        amount: faker.datatype.number({ min: 10, max: 100 }),
        date: faker.date.past(),
      },
    });
  }

  console.log("Database seeded with test data.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
