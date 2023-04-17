/**
 * Generated by "@vuepress/plugin-blog"
 */

import sorters from './pageSorters'
import filters from './pageFilters'

export default [{
  pid: "tags",
  id: "JavaScript",
  filter: filters.tags,
  sorter: sorters.tags,
  pages: [{"path":"/tag/JavaScript/","interval":[0,2]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tags",
  id: "手写",
  filter: filters.tags,
  sorter: sorters.tags,
  pages: [{"path":"/tag/手写/","interval":[0,2]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "categories",
  id: "11",
  filter: filters.categories,
  sorter: sorters.categories,
  pages: [],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "categories",
  id: "前端",
  filter: filters.categories,
  sorter: sorters.categories,
  pages: [{"path":"/categories/前端/","interval":[0,1]}],
  prevText: "Prev",
  nextText: "Next",
}]