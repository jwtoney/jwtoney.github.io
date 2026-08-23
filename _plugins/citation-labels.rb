# Renders in-text citations as venue + year, e.g. "(PNAS 2025)", instead of the
# author-date form the CSL style produces ("(Toney et al., 2025)").
#
# jekyll-scholar builds the in-text citation from the CSL style, which has no access
# to a short venue name, so the label is taken from an optional `citelabel` field on
# the BibTeX entry. Entries without one keep whatever the style produced.
#
# The anchor and its href are untouched, so citations still link to the References
# list that {% bibliography --cited_in_order %} renders at the bottom of the page.
module CitationLabels
  CITATION = %r{(<a\s+class="citation"\s+href="\#([^"]+)">)(.*?)(</a>)}m

  def self.labels(site)
    @labels ||= begin
      path = File.join(site.source, "_bibliography", "papers.bib")
      map = {}
      if File.exist?(path)
        entry_key = nil
        File.foreach(path) do |line|
          if (m = line.match(/^\s*@\w+\{\s*([^,\s]+)\s*,/))
            entry_key = m[1]
          elsif entry_key && (m = line.match(/^\s*citelabel\s*=\s*\{(.+?)\}\s*,?\s*$/))
            map[entry_key] = m[1].strip
          end
        end
      end
      map
    end
  end

  def self.rewrite(doc, site)
    return if doc.output.nil?
    map = labels(site)
    return if map.empty?
    doc.output = doc.output.gsub(CITATION) do
      open_tag, key, text, close_tag = $1, $2, $3, $4
      map.key?(key) ? "#{open_tag}(#{map[key]})#{close_tag}" : "#{open_tag}#{text}#{close_tag}"
    end
  end
end

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  CitationLabels.rewrite(doc, doc.site)
end
