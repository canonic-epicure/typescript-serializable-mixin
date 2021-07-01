import { Project } from "@bryntum/siesta/index.js"

const project = Project.new({
    title                   : 'TypeScript mixin class test suite',

    testDescriptor          : {}
})

project.plan(
    {
        filename       : 'serializable',

        items       : [
            'serializable.t.js',
            'serializable_scoped.t.js'
        ]
    },
)

project.start()

