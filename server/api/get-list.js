const getList = num => {
    return Array(num).fill().map((item, index) => {
        return {
            content: Number(Math.random() > 0.5),
            index: index
        }
    })
}

module.exports = router => {
    router.get('/api/get-list1', async ctx => {
        ctx.body = {
            code: '0',
            data: {
                list: getList(10)
            }
        }
    })
    router.get('/api/get-list2', async ctx => {
        ctx.body = {
            code: '0',
            data: {
                list: [
                    {
                        content: 0,
                        index: 0
                    }
                ]
            }
        }
    })
    return router
}