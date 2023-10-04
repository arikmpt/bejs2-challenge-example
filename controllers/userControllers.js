const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

module.exports = {
    registerUser: async (req, res) => {
        const user = await prisma.users.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                profile: {
                    create: {
                        identity_number: req.body.identity_number,
                        identity_type: req.body.identity_type,
                        address: req.body.address,
                    }
                }
            }
        });


        return res.json({
            data: user
        })
    }
}