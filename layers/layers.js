var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Anlegganleggsklasse_1 = new ol.format.GeoJSON();
var features_Anlegganleggsklasse_1 = format_Anlegganleggsklasse_1.readFeatures(json_Anlegganleggsklasse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anlegganleggsklasse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anlegganleggsklasse_1.addFeatures(features_Anlegganleggsklasse_1);
var lyr_Anlegganleggsklasse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anlegganleggsklasse_1, 
                style: style_Anlegganleggsklasse_1,
                popuplayertitle: "Anlegg — anleggsklasse",
                interactive: true,
    title: 'Anlegg — anleggsklasse<br />\
    <img src="styles/legend/Anlegganleggsklasse_1_0.png" /> Nærmiljøanlegg<br />\
    <img src="styles/legend/Anlegganleggsklasse_1_1.png" /> Ordinært anlegg<br />\
    <img src="styles/legend/Anlegganleggsklasse_1_2.png" /> <br />'
        });
var format_Anlegganleggskategori_2 = new ol.format.GeoJSON();
var features_Anlegganleggskategori_2 = format_Anlegganleggskategori_2.readFeatures(json_Anlegganleggskategori_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anlegganleggskategori_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anlegganleggskategori_2.addFeatures(features_Anlegganleggskategori_2);
var lyr_Anlegganleggskategori_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anlegganleggskategori_2, 
                style: style_Anlegganleggskategori_2,
                popuplayertitle: "Anlegg — anleggskategori",
                interactive: true,
    title: 'Anlegg — anleggskategori<br />\
    <img src="styles/legend/Anlegganleggskategori_2_0.png" /> Aktivitetspark<br />\
    <img src="styles/legend/Anlegganleggskategori_2_1.png" /> Anlegg for vinteraktivitet<br />\
    <img src="styles/legend/Anlegganleggskategori_2_2.png" /> Fotballanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_3.png" /> Friidrettsanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_4.png" /> Friluftslivsanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_5.png" /> Hestesportanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_6.png" /> Idrettshaller og aktivitetssaler<br />\
    <img src="styles/legend/Anlegganleggskategori_2_7.png" /> Idrettshus og servicebygg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_8.png" /> Kart<br />\
    <img src="styles/legend/Anlegganleggskategori_2_9.png" /> Kulturarena<br />\
    <img src="styles/legend/Anlegganleggskategori_2_10.png" /> Luftsportanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_11.png" /> Mindre utendørsanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_12.png" /> Skateanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_13.png" /> Ski- og alpinanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_14.png" /> Skyteanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_15.png" /> Svømme- og stupeanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_16.png" /> Sykkelanlegg<br />\
    <img src="styles/legend/Anlegganleggskategori_2_17.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Anlegganleggsklasse_1.setVisible(true);lyr_Anlegganleggskategori_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Anlegganleggsklasse_1,lyr_Anlegganleggskategori_2];
lyr_Anlegganleggsklasse_1.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Anleggsnummer': 'Anleggsnummer', 'Anleggsstatus': 'Anleggsstatus', 'Eier': 'Eier', 'Anleggsklasse': 'Anleggsklasse', 'Anleggskategori': 'Anleggskategori', 'Anleggstype': 'Anleggstype', 'Byggeår': 'Byggeår', 'Siste ombyggingsår': 'Siste ombyggingsår', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Anlegganleggskategori_2.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Anleggsnummer': 'Anleggsnummer', 'Anleggsstatus': 'Anleggsstatus', 'Eier': 'Eier', 'Anleggsklasse': 'Anleggsklasse', 'Anleggskategori': 'Anleggskategori', 'Anleggstype': 'Anleggstype', 'Byggeår': 'Byggeår', 'Siste ombyggingsår': 'Siste ombyggingsår', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Anlegganleggsklasse_1.set('fieldImages', {'fid': '', 'Navn': '', 'Anleggsnummer': '', 'Anleggsstatus': '', 'Eier': '', 'Anleggsklasse': '', 'Anleggskategori': '', 'Anleggstype': '', 'Byggeår': '', 'Siste ombyggingsår': '', 'Longitude': '', 'Latitude': '', });
lyr_Anlegganleggskategori_2.set('fieldImages', {'fid': '', 'Navn': '', 'Anleggsnummer': '', 'Anleggsstatus': '', 'Eier': '', 'Anleggsklasse': '', 'Anleggskategori': '', 'Anleggstype': '', 'Byggeår': '', 'Siste ombyggingsår': '', 'Longitude': '', 'Latitude': '', });
lyr_Anlegganleggsklasse_1.set('fieldLabels', {'fid': 'no label', 'Navn': 'header label - visible with data', 'Anleggsnummer': 'inline label - visible with data', 'Anleggsstatus': 'inline label - visible with data', 'Eier': 'header label - visible with data', 'Anleggsklasse': 'inline label - visible with data', 'Anleggskategori': 'inline label - visible with data', 'Anleggstype': 'inline label - visible with data', 'Byggeår': 'inline label - visible with data', 'Siste ombyggingsår': 'hidden field', 'Longitude': 'hidden field', 'Latitude': 'hidden field', });
lyr_Anlegganleggskategori_2.set('fieldLabels', {'fid': 'no label', 'Navn': 'header label - visible with data', 'Anleggsnummer': 'inline label - visible with data', 'Anleggsstatus': 'inline label - visible with data', 'Eier': 'header label - visible with data', 'Anleggsklasse': 'inline label - visible with data', 'Anleggskategori': 'inline label - visible with data', 'Anleggstype': 'inline label - visible with data', 'Byggeår': 'inline label - visible with data', 'Siste ombyggingsår': 'hidden field', 'Longitude': 'hidden field', 'Latitude': 'hidden field', });
lyr_Anlegganleggskategori_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});