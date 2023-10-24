import React, { useMemo } from 'react'

export const EditorHtml = ({ str }: { str: string }) => {
  const htmlBlocks = useMemo(() => {
    return JSON.parse(str).blocks
  }, [str])

  /**
   * Get Youtube ID
   * @param url
   * @returns
   */
  const youtubeParser = (url: string) => {
    var regExp =
      /(?:youtube(?:-nocookie)?\.com\/(?:[^\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    var match = url.match(regExp)
    return match ? match[1] : false
  }

  return (
    <div className="space-y-6 lg:space-y-10">
      {htmlBlocks.map((block: any, idx: number) => (
        <div key={idx}>
          {block.type === 'paragraph' ? (
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: block.data.text.replace(/\n/g, '<br />'),
                }}></p>
            </div>
          ) : (
            <></>
          )}
          {block.type === 'header' && block.data.level === 1 ? (
            <h1
              className={`text-5xl font-bold`}
              dangerouslySetInnerHTML={{
                __html: block.data.text.replace(/\n/g, '<br />'),
              }}
            />
          ) : (
            <></>
          )}
          {block.type === 'header' && block.data.level === 2 ? (
            <h2
              className={`text-4xl font-bold`}
              dangerouslySetInnerHTML={{
                __html: block.data.text.replace(/\n/g, '<br />'),
              }}
            />
          ) : (
            <></>
          )}
          {block.type === 'header' && block.data.level === 3 ? (
            <h3
              className={`text-3xl font-bold`}
              dangerouslySetInnerHTML={{
                __html: block.data.text.replace(/\n/g, '<br />'),
              }}
            />
          ) : (
            <></>
          )}
          {block.type === 'header' && block.data.level === 4 ? (
            <h4
              className={`text-2xl font-bold`}
              dangerouslySetInnerHTML={{
                __html: block.data.text.replace(/\n/g, '<br />'),
              }}
            />
          ) : (
            <></>
          )}
          {block.type === 'header' && block.data.level === 5 ? (
            <h5
              className={`text-xl font-bold`}
              dangerouslySetInnerHTML={{
                __html: block.data.text.replace(/\n/g, '<br />'),
              }}
            />
          ) : (
            <></>
          )}
          {block.type === 'header' && block.data.level === 6 ? (
            <h6
              className={`text-lg font-bold`}
              dangerouslySetInnerHTML={{
                __html: block.data.text.replace(/\n/g, '<br />'),
              }}
            />
          ) : (
            <></>
          )}
          {block.type === 'image' ? (
            <div className="w-full">
              <img
                src={block.data.file.url}
                alt={block.data.caption ? block.data.caption : 'Image'}
                className="w-full block"
              />
              {block.data.caption ? (
                <p
                  className="pt-3 text-[#8C8C8C] text-sm"
                  dangerouslySetInnerHTML={{
                    __html: block.data.caption.replace(/\n/g, '<br />'),
                  }}
                />
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
          {block.type === 'simpleImage' ? (
            <div className="w-full">
              <img
                src={block.data.url}
                alt={block.data.caption ? block.data.caption : 'Image'}
                className="w-full block"
              />
              {block.data.caption ? (
                <p className="pt-3 text-[#8C8C8C] text-sm">
                  {block.data.caption}
                </p>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
          {block.type === 'embed' && block.data.service === 'youtube' ? (
            <div className="block">
              <div className="embed-video-container">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${youtubeParser(
                    block.data.source
                  )}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {block.data.caption ? (
                <p className="pt-3 text-[#8C8C8C] text-sm">
                  {block.data.caption}
                </p>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
          {block.type === 'table' ? (
            <table className="w-full">
              <tbody className="w-full table-fixed">
                {block.data.content.map((row: any, rIdx: number) => (
                  <tr key={rIdx}>
                    {row.map((col: string, cIdx: number) => (
                      <td
                        className={`border border-gray-300 p-1 ${
                          rIdx === 0 ? 'font-bold' : ''
                        }`}
                        key={cIdx}
                        dangerouslySetInnerHTML={{
                          __html: col.replace(/\n/g, '<br />'),
                        }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <></>
          )}
          {block.type === 'list' && block.data.style === 'ordered' ? (
            <ol className="w-full list-decimal pl-6">
              {block.data.items.map((item: string, idx: number) => (
                <li
                  key={idx}
                  className="text-[#000000] lg:text-lg font-normal leading-[150%] lg:leading-[160%]">
                  {item}
                </li>
              ))}
            </ol>
          ) : (
            <></>
          )}
          {block.type === 'list' && block.data.style !== 'ordered' ? (
            <ul className="w-full list-disc pl-6">
              {block.data.items.map((item: string, idx: number) => (
                <li
                  key={idx}
                  className="text-[#000000] lg:text-lg font-normal leading-[150%] lg:leading-[160%]">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
          {block.type === 'checklist' ? (
            <ul className="w-full">
              {block.data.items.map((item: any, idx: number) => (
                <li
                  key={idx}
                  className="text-[#000000] lg:text-lg font-normal leading-[150%] lg:leading-[160%] flex space-x-1 items-center">
                  <span>
                    <input type="checkbox" checked={item.checked} />
                  </span>
                  <span>{item.text as string}</span>
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
          {block.type === 'quote' ? (
            <blockquote className="border-l-4 pl-4">
              <p>{block.data.text}</p>
              <footer className="border-t pt-4 mt-4 text-xs">
                {block.data.caption}
              </footer>
            </blockquote>
          ) : (
            <></>
          )}
          {block.type === 'delimiter' ? <hr /> : <></>}
          {block.type === 'raw' ? (
            <div
              dangerouslySetInnerHTML={{
                __html: block.data.html,
              }}
            />
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  )
}
