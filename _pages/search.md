---
layout: page
title: Search
permalink: /search/
---

<div id="search-container">
    <input type="text" id="search-input" placeholder="Post titles, dates, tags">
    <ul id="results-container"></ul>
</div>

<script src="{{ site.baseurl }}/assets/simple-jekyll-search.min.js" type="text/javascript"></script>

<script>
    SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    searchResultTemplate: '<div style="text-align: left !important;"> <a href="{url}"><h1 style="text-align:left !important;">{title}</h1></a> <div class="post-tags" style="text-align: left !important;"> <a>{category}</a> </div> <span style="text-align:left !important;">{date}</span> </div>',
    json: '{{ site.baseurl }}/search.json'
    });
</script>

<!-- Keeping this down here so it's easier to see the search template layout -->
<!-- 
<div style="text-align: left !important;">
    
    <a href="{url}">
        <h1 style="text-align:left !important;">{title}</h1>
    </a>
    
    <div class="post-tags" style="text-align: left !important;"> 
        <a>{category}</a> 
    </div>
    
    <span style="text-align:left !important;">
        {date}
    </span>
</div>
-->