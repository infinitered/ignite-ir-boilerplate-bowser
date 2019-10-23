module.exports = {
  description: 'Generates a component, supporting files, and a storybook test.',
  run: async function(toolbox) {
    // grab some features
    const { parameters, strings, print, ignite, patching, filesystem } = toolbox
    const { pascalCase, isBlank } = strings

    // validation
    if (isBlank(parameters.first)) {
      print.info('A name is required.')
      print.info(`ignite generate component <name>\n`)
      return
    }

    const name = parameters.first
    const pascalName = pascalCase(name)

    const props = { name, pascalName }
    const jobs = [
      {
        template: 'component.tsx.ejs',
        target: `app/components/${name}/${name}.tsx`
      },
      {
        template: 'component.story.tsx.ejs',
        target: `app/components/${name}/${name}.story.tsx`
      }
    ]

    await ignite.copyBatch(toolbox, jobs, props)

    // patch the barrel export file
    const barrelExportPath = `${process.cwd()}/app/components/index.ts`
    const exportToAdd = `export * from "./${name}/${name}"\n`

    if (!filesystem.exists(barrelExportPath)) {
      const msg =
      `No '${barrelExportPath}' file found. Can't export component.` +
      `Export your new component manually.`
      print.error(msg)
      process.exit(1)
    }
    await patching.append(barrelExportPath, exportToAdd)

    // wire up example
    await patching.prepend(
      './storybook/storybook-registry.ts',
      `require("../app/components/${name}/${name}.story")\n`
    )
  }
}
