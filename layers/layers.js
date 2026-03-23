var wms_layers = [];

var format_surf_0 = new ol.format.GeoJSON();
var features_surf_0 = format_surf_0.readFeatures(json_surf_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surf_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surf_0.addFeatures(features_surf_0);
var lyr_surf_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_surf_0, 
                style: style_surf_0,
                popuplayertitle: 'surf',
                interactive: true,
    title: 'surf<br />\
    <img src="styles/legend/surf_0_0.png" /> chemin<br />\
    <img src="styles/legend/surf_0_1.png" /> Circuits<br />\
    <img src="styles/legend/surf_0_2.png" /> L\'Atelier<br />\
    <img src="styles/legend/surf_0_3.png" /> salle Civil<br />\
    <img src="styles/legend/surf_0_4.png" /> Salle Endurance/ GT/Autre Piste<br />\
    <img src="styles/legend/surf_0_5.png" /> salle F1<br />\
    <img src="styles/legend/surf_0_6.png" /> salle Rally<br />\
    <img src="styles/legend/surf_0_7.png" /> Lego<br />\
    <img src="styles/legend/surf_0_8.png" /> fond<br />' });
var format_line_1 = new ol.format.GeoJSON();
var features_line_1 = format_line_1.readFeatures(json_line_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_line_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_line_1.addFeatures(features_line_1);
var lyr_line_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_line_1, 
                style: style_line_1,
                popuplayertitle: 'line',
                interactive: true,
                title: '<img src="styles/legend/line_1.png" /> line'
            });
var format_pct_2 = new ol.format.GeoJSON();
var features_pct_2 = format_pct_2.readFeatures(json_pct_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pct_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pct_2.addFeatures(features_pct_2);
var lyr_pct_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pct_2, 
                style: style_pct_2,
                popuplayertitle: 'pct',
                interactive: true,
                title: '<img src="styles/legend/pct_2.png" /> pct'
            });

lyr_surf_0.setVisible(true);lyr_line_1.setVisible(true);lyr_pct_2.setVisible(true);
var layersList = [lyr_surf_0,lyr_line_1,lyr_pct_2];
lyr_surf_0.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_line_1.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_pct_2.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_surf_0.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_line_1.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_pct_2.set('fieldImages', {'id': '', 'nom': '', });
lyr_surf_0.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_line_1.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_pct_2.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_pct_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});