var wms_layers = [];

var format_AlternativeFoundationGrantees_0 = new ol.format.GeoJSON();
var features_AlternativeFoundationGrantees_0 = format_AlternativeFoundationGrantees_0.readFeatures(json_AlternativeFoundationGrantees_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlternativeFoundationGrantees_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlternativeFoundationGrantees_0.addFeatures(features_AlternativeFoundationGrantees_0);
var lyr_AlternativeFoundationGrantees_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlternativeFoundationGrantees_0, 
                style: style_AlternativeFoundationGrantees_0,
                popuplayertitle: 'Alternative Foundation Grantees',
                interactive: true,
    title: 'Alternative Foundation Grantees<br />\
    <img src="styles/legend/AlternativeFoundationGrantees_0_0.png" /> <br />\
    <img src="styles/legend/AlternativeFoundationGrantees_0_1.png" /> 1<br />\
    <img src="styles/legend/AlternativeFoundationGrantees_0_2.png" /> 2<br />\
    <img src="styles/legend/AlternativeFoundationGrantees_0_3.png" /> 3<br />\
    <img src="styles/legend/AlternativeFoundationGrantees_0_4.png" /> 4<br />\
    <img src="styles/legend/AlternativeFoundationGrantees_0_5.png" /> 5<br />' });
var format_Detroit_1 = new ol.format.GeoJSON();
var features_Detroit_1 = format_Detroit_1.readFeatures(json_Detroit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Detroit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Detroit_1.addFeatures(features_Detroit_1);
var lyr_Detroit_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Detroit_1, 
                style: style_Detroit_1,
                popuplayertitle: 'Detroit',
                interactive: false,
                title: '<img src="styles/legend/Detroit_1.png" /> Detroit'
            });
var format_Coastline_2 = new ol.format.GeoJSON();
var features_Coastline_2 = format_Coastline_2.readFeatures(json_Coastline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coastline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coastline_2.addFeatures(features_Coastline_2);
var lyr_Coastline_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coastline_2, 
                style: style_Coastline_2,
                popuplayertitle: 'Coastline',
                interactive: false,
                title: '<img src="styles/legend/Coastline_2.png" /> Coastline'
            });

lyr_AlternativeFoundationGrantees_0.setVisible(true);lyr_Detroit_1.setVisible(true);lyr_Coastline_2.setVisible(true);
var layersList = [lyr_AlternativeFoundationGrantees_0,lyr_Detroit_1,lyr_Coastline_2];
lyr_AlternativeFoundationGrantees_0.set('fieldAliases', {'fid': 'fid', 'ZIP Code': 'ZIP Code', 'Bailey Park NDC': 'Bailey Park NDC', 'College Career & Beyond': 'College Career & Beyond', 'Detroit Food Academy': 'Detroit Food Academy', 'Developing KIDS': 'Developing KIDS', 'NW Goldberg Cares': 'NW Goldberg Cares', 'Total Organizations': 'Total Organizations', });
lyr_Detroit_1.set('fieldAliases', {'FID': 'FID', 'name': 'name', });
lyr_Coastline_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'waterbody': 'waterbody', 'WBID': 'WBID', 'CENTROID_X': 'CENTROID_X', 'CENTRIOD_Y': 'CENTRIOD_Y', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_AlternativeFoundationGrantees_0.set('fieldImages', {'fid': '', 'ZIP Code': '', 'Bailey Park NDC': '', 'College Career & Beyond': '', 'Detroit Food Academy': '', 'Developing KIDS': '', 'NW Goldberg Cares': '', 'Total Organizations': '', });
lyr_Detroit_1.set('fieldImages', {'FID': 'Range', 'name': 'TextEdit', });
lyr_Coastline_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'waterbody': '', 'WBID': '', 'CENTROID_X': '', 'CENTRIOD_Y': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'Shape__Are': '', 'Shape__Len': '', });
lyr_AlternativeFoundationGrantees_0.set('fieldLabels', {'fid': 'no label', 'ZIP Code': 'inline label - always visible', 'Bailey Park NDC': 'no label', 'College Career & Beyond': 'no label', 'Detroit Food Academy': 'no label', 'Developing KIDS': 'no label', 'NW Goldberg Cares': 'no label', 'Total Organizations': 'inline label - always visible', });
lyr_Detroit_1.set('fieldLabels', {'FID': 'no label', 'name': 'no label', });
lyr_Coastline_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'waterbody': 'no label', 'WBID': 'no label', 'CENTROID_X': 'no label', 'CENTRIOD_Y': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Coastline_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});