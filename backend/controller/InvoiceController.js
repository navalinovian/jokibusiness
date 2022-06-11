const { Invoice, Product, User } = require("../models");


exports.invoiceIndex = async (req, res) => {
    try {
        const invoices = await Invoice.findAll({
            include: {
                model: Product,
                attributes: ['id','name', 'price'],
            }
        })
        return res.json(invoices)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.invoiceShow = async (req, res) => {
    const uuid = req.params.uuid
    try {
        const invoice = await Invoice.findOne({
            where: {
                id: uuid
            },
            include: {
                model: Product,
                attributes: ['id','name', 'price'],
                include:{
                    model:Category,
                    attributes: ['name'],
                },
                through:{
                    attributes:['quantity']
                    
                }   
            }
        })

        return res.json(invoice)
    } catch (error) {
        console.log(error);
        return res.status(404).json(error.errors)
    }
}

exports.invoiceCreate = async (request, res) => {
    const { userId, productId, expiredDate } = request.body
    try {
        const user = await User.findOne({
            where: {
                id: userId
            }
        })
        const product = await Product.findOne({
            where:{
                id:productId
            }
        })
        const invoice = await Invoice.create({
            userId: userId,
            productId: productId,
            expiredDate: expiredDate
        })

        return res.json(invoice)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

