<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
<xsl:template match="/">
<html>
<body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
<xsl:for-each select="Places/restaurants/restaurant">
  <div style="background-color:teal;color:white;padding:4px">
    <span style="font-weight:bold"><xsl:value-of select="name"/> - </span><xsl:value-of select="description"/>
    </div>
</xsl:for-each>
<br></br>
<xsl:for-each select="Places/monuments/monument">
    <div style="background-color:teal;color:white;padding:4px">
      <span style="font-weight:bold"><xsl:value-of select="name"/> - </span>
      <xsl:value-of select="description"/>
      <br></br>
      <xsl:value-of select="image"/>
    </div>
</xsl:for-each>
<br></br>
<xsl:for-each select="Places/museums/museum">
    <div style="background-color:teal;color:white;padding:4px">
      <span style="font-weight:bold"><xsl:value-of select="name"/> - </span>
      <xsl:value-of select="description"/>
    </div>
</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
