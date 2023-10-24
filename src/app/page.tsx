import sampleJson from './sample.json'
import { prettyPrintJson } from 'pretty-print-json'
import { EditorHtml } from '@/components/EditorHtml'

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex-none space-y-1 absolute top-0 py-2 px-10 bg-white w-full text-sm">
        <p>
          Memex uses Editor.js (
          <a href="https://editorjs.io/" target="_blank" className="underline">
            https://editorjs.io/
          </a>
          ) as Rich Text Component editor. Visit our git repository (
          <a
            href="https://github.com/memexdata/richtext-editorjs"
            target="_blank"
            className="underline">
            https://github.com/memexdata/richtext-editorjs
          </a>
          ) to see example codes.
        </p>
      </div>
      <div className="h-full grid grid-cols-2 gap-10">
        <div className="h-full overflow-y-auto p-10">
          <h2 className="text-lg font-bold mb-4">JSON</h2>
          <pre
            id="json-sample"
            className="json-container"
            dangerouslySetInnerHTML={{
              __html: prettyPrintJson.toHtml(sampleJson),
            }}
          />
        </div>
        <div className="h-full overflow-y-auto p-10">
          <h2 className="text-lg font-bold mb-4">HTML</h2>
          <EditorHtml str={JSON.stringify(sampleJson)} />
        </div>
      </div>
    </main>
  )
}
