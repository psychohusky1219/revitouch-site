import {defineConfig} from 'sanity'
import {structureTool, type StructureResolver} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const structure: StructureResolver = (S) =>
  S.list()
    .title('ReviTouch Website')
    .items([
      S.listItem()
        .title('Website Content')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ])

export default defineConfig({
  name: 'default',
  title: 'ReviTouch Website',
  projectId: 'sdujfzmd',
  dataset: 'production',
  plugins: [structureTool({structure})],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => schemaType !== 'siteSettings'),
  },
})
