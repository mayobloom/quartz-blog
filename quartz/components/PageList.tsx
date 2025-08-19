import { FullSlug, isFolderPath, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"
import readingTime from "reading-time"
import { i18n } from "../i18n"

export type SortFn = (f1: QuartzPluginData, f2: QuartzPluginData) => number

export function byDateAndAlphabetical(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    // Sort by date/alphabetical
    if (f1.dates && f2.dates) {
      // sort descending
      return getDate(cfg, f2)!.getTime() - getDate(cfg, f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      // prioritize files with dates
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

export function byDateAndAlphabeticalFolderFirst(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    // Sort folders first
    const f1IsFolder = isFolderPath(f1.slug ?? "")
    const f2IsFolder = isFolderPath(f2.slug ?? "")
    if (f1IsFolder && !f2IsFolder) return -1
    if (!f1IsFolder && f2IsFolder) return 1

    // If both are folders or both are files, sort by date/alphabetical
    if (f1.dates && f2.dates) {
      // sort descending
      return getDate(cfg, f2)!.getTime() - getDate(cfg, f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      // prioritize files with dates
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

type Props = {
  limit?: number
  sort?: SortFn
} & QuartzComponentProps

export const PageList: QuartzComponent = ({ cfg, fileData, allFiles, limit, sort }: Props) => {
  const sorter = sort ?? byDateAndAlphabeticalFolderFirst(cfg)
  let list = allFiles.sort(sorter)
  if (limit) {
    list = list.slice(0, limit)
  }

  return (
    <ul class="section-ul">
      {list.map((page) => {
        const title = page.frontmatter?.title
        const tags = page.frontmatter?.tags ?? []

        return (
          <li class="section-li">
            <div class="section">
              <p class="meta">
                {page.dates && <Date date={getDate(cfg, page)!} locale={cfg.locale} />}
              </p>
              <div class="desc">
                <h3>
                  <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                    {title}
                  </a>
                </h3>
                {/* description 추가 */}
                {page.frontmatter?.description && (
                  <div class="description">{page.frontmatter.description}</div>
                )}
                {page.text && (
                  <div class="reading-time">
                    <span class="clock-icon">⏱️</span>
                    {Math.ceil(readingTime(page.text).minutes)} min read
                  </div>
                )}
              </div>
              <ul class="tags">
                {tags.map((tag) => (
                  <li>
                    <a
                      class="internal tag-link"
                      href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                    >
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

PageList.css = `
.section h3 {
  margin: 0;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.section > .meta {
  order: 1;
}

.section > .desc {
  order: 2;
  
  .reading-time {
    font-size: 0.9rem;
    color: var(--gray);
    margin-top: 0.5rem;
    
    [saved-theme=light] & {
      color: var(--darkgray);
    }
    
    .clock-icon {
      margin-right: 0.3rem;
      font-size: 0.9rem;
    }
  }
}

.section > .tags {
  order: 3;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
}

.section > .tags > li {
  margin: 0;
  padding: 0;
}

.section > .tags > li > a.internal.tag-link {
  display: inline-block;
  padding: 0.2rem 0.4rem;
  background-color: var(--highlight);
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--dark);
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.section > .tags > li > a.internal.tag-link:hover {
  background-color: var(--secondary);
  color: var(--light);
}

.section > .meta {
  margin-bottom: 0.5rem;
}

.section > .desc {
  margin-bottom: 0.8rem;
}

.section > .tags {
  margin: 0;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.section > .tags > li {
  display: inline-block;
}

.section > .tags > li > a.internal.tag-link {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  background-color: var(--highlight);
  border-radius: 4px;
  font-size: 0.875rem;
  color: var(--dark);
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.section > .tags > li > a.internal.tag-link:hover {
  background-color: var(--secondary);
  color: var(--light);
}
`
