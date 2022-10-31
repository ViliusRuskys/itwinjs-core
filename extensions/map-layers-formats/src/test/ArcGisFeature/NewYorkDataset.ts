/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

/* eslint-disable @typescript-eslint/naming-convention */

export class NewYorkDataset {

  public static serviceCapabilities: any =
  {
    currentVersion : 10.81,
    serviceItemId : "af1ebcf87a9741458b08360b5802a003",
    hasChangeTrackingEnabledViews : true,
    serviceDescription : "Summary text",
    hasVersionedData : false,
    supportsDisconnectedEditing : false,
    hasStaticData : false,
    hasSharedDomains : false,
    maxRecordCount : 1000,
    supportedQueryFormats : "JSON",
    supportsVCSProjection : false,
    supportedExportFormats : "csv,shapefile,sqlite,geoPackage,filegdb,featureCollection,geojson,excel",
    capabilities : "Query,ChangeTracking",
    description : "My Description",
    copyrightText : "",
    spatialReference : {
      wkid : 102100,
      latestWkid : 3857,
    },
    initialExtent : {
      xmin : -8253177.9212990291,
      ymin : 4956654.8286338719,
      xmax : -8218318.9974145154,
      ymax : 4971008.5031745536,
      spatialReference : {
        wkid : 102100,
        latestWkid : 3857,
      },
    },
    fullExtent : {
      xmin : -8270363.8159049358,
      ymin : 4935557.2945022825,
      xmax : -8204174.9423192516,
      ymax : 5000899.6957413526,
      spatialReference : {
        wkid : 102100,
        latestWkid : 3857,
      },
    },
    allowGeometryUpdates : true,
    units : "esriMeters",
    supportsAppend : true,
    supportsSharedDomains : true,
    supportsWebHooks : true,
    supportsTemporalLayers : true,
    layerOverridesEnabled : true,
    size : 132923392,
    syncEnabled : false,
    extractChangesCapabilities : {
      supportsReturnIdsOnly : true,
      supportsReturnExtentOnly : true,
      supportsReturnAttachments : true,
      supportsLayerQueries : true,
      supportsGeometry : true,
      supportsFeatureReturn : true,
      supportsReturnHasGeometryUpdates : false,
      supportsReturnDeletedFeatures : true,
      supportsServerGens : true,
    },
    supportsApplyEditsWithGlobalIds : true,
    supportsReturnDeleteResults : true,
    supportsLayerOverrides : true,
    supportsTilesAndBasicQueriesMode : true,
    supportsQueryContingentValues : true,
    supportedContingentValuesFormats : "JSON, PBF",
    supportsContingentValuesJson : 2,
    advancedEditingCapabilities : {
      supportsSplit : false,
      supportsReturnServiceEditsInSourceSR : false,
      supportsAsyncApplyEdits : true,
      supportsReturnEditResults : true,
    },
    editorTrackingInfo : {
      enableEditorTracking : false,
      enableOwnershipAccessControl : false,
      allowOthersToQuery : true,
      allowOthersToUpdate : true,
      allowOthersToDelete : false,
      allowAnonymousToQuery : true,
      allowAnonymousToUpdate : true,
      allowAnonymousToDelete : true,
    },
    changeTrackingInfo :
    {
      lastSyncDate : 1637077884618,
      layerServerGens : [
        {
          id : 0,
          minServerGen : 498989,
          serverGen : 689984,
        },
        {
          id : 1,
          minServerGen : 498989,
          serverGen : 689984,
        },
        {
          id : 2,
          minServerGen : 498989,
          serverGen : 689984,
        },
        {
          id : 3,
          minServerGen : 498989,
          serverGen : 689984,
        },
        {
          id : 4,
          minServerGen : 498989,
          serverGen : 689984,
        },
        {
          id : 5,
          minServerGen : 498989,
          serverGen : 689984,
        },
        {
          id : 6,
          minServerGen : 498989,
          serverGen : 689984,
        },
        {
          id : 7,
          minServerGen : 498989,
          serverGen : 689984,
        },
        {
          id : 8,
          minServerGen : 498989,
          serverGen : 689984,
        },
        {
          id : 9,
          minServerGen : 498989,
          serverGen : 689984,
        },
      ],
    },
    xssPreventionInfo : {
      xssPreventionEnabled : true,
      xssPreventionRule : "InputOnly",
      xssInputRule : "rejectInvalid",
    },
    layers : [
      {
        id : 0,
        name : "Street",
        parentLayerId : -1,
        defaultVisibility : true,
        subLayerIds : null,
        minScale : 150000,
        maxScale : 0,
        geometryType : "esriGeometryPolyline",
      },
      {
        id : 1,
        name : "Highway",
        parentLayerId : -1,
        defaultVisibility : true,
        subLayerIds : null,
        minScale : 150000,
        maxScale : 0,
        geometryType : "esriGeometryPolyline",
      },
      {
        id : 2,
        name : "Block",
        parentLayerId : -1,
        defaultVisibility : true,
        subLayerIds : null,
        minScale : 150000,
        maxScale : 0,
        geometryType : "esriGeometryPolyline",
      },
      {
        id : 3,
        name : "Shoreline",
        parentLayerId : -1,
        defaultVisibility : true,
        subLayerIds : null,
        minScale : 0,
        maxScale : 0,
        geometryType : "esriGeometryPolyline",
      },
      {
        id : 4,
        name : "nyco",
        parentLayerId : -1,
        defaultVisibility : true,
        subLayerIds : null,
        minScale : 0,
        maxScale : 0,
        geometryType : "esriGeometryPolygon",
      },
      {
        id : 5,
        name : "nylh",
        parentLayerId : -1,
        defaultVisibility : true,
        subLayerIds : null,
        minScale : 0,
        maxScale : 0,
        geometryType : "esriGeometryPolygon",
      },
      {
        id : 6,
        name : "nysp",
        parentLayerId : -1,
        defaultVisibility : true,
        subLayerIds : null,
        minScale : 0,
        maxScale : 0,
        geometryType : "esriGeometryPolygon",
      },
      {
        id : 7,
        name : "nysp_sd",
        parentLayerId : -1,
        defaultVisibility : true,
        subLayerIds : null,
        minScale : 0,
        maxScale : 0,
        geometryType : "esriGeometryPolygon",
      },
      {
        id : 8,
        name : "nyzd",
        parentLayerId : -1,
        defaultVisibility : false,
        subLayerIds : null,
        minScale : 0,
        maxScale : 0,
        geometryType : "esriGeometryPolygon",
      },
      {
        id : 9,
        name : "nyzma",
        parentLayerId : -1,
        defaultVisibility : true,
        subLayerIds : null,
        minScale : 0,
        maxScale : 0,
        geometryType : "esriGeometryPolygon",
      },
    ],
    tables : [],
  };

  public static streetsLayerCapabilities: any = {
    currentVersion:10.81,id:0,name:"Street",type:"Feature Layer",serviceItemId:"af1ebcf87a9741458b08360b5802a003",cacheMaxAge:30,displayField:"borough",description:"",copyrightText:"",defaultVisibility:true,serverGens:{minServerGen:498989,serverGen:689763},
    editingInfo:{lastEditDate:1637077888141},
    relationships:[],isDataVersioned:false,hasContingentValuesDefinition:false,supportsAppend:true,supportsCalculate:true,supportsASyncCalculate:true,supportsTruncate:true,supportsAttachmentsByUploadId:true,supportsAttachmentsResizing:true,supportsRollbackOnFailureParameter:true,supportsStatistics:true,supportsExceedsLimitStatistics:true,supportsAdvancedQueries:true,supportsValidateSql:true,supportsCoordinatesQuantization:true,supportsLayerOverrides:true,supportsTilesAndBasicQueriesMode:true,supportsFieldDescriptionProperty:true,supportsQuantizationEditMode:true,supportsApplyEditsWithGlobalIds:true,supportsMultiScaleGeometry:true,supportsReturningQueryGeometry:true,hasGeometryProperties:true,geometryProperties:{shapeLengthFieldName:"Shape__Length",units:"esriMeters"},
    advancedQueryCapabilities:{supportsPagination:true,supportsQueryAttachmentsCountOnly:true,supportsPaginationOnAggregatedQueries:true,supportsQueryRelatedPagination:true,supportsQueryWithDistance:true,supportsReturningQueryExtent:true,supportsStatistics:true,supportsOrderBy:true,supportsDistinct:true,supportsQueryWithResultType:true,supportsSqlExpression:true,supportsAdvancedQueryRelated:true,supportsCountDistinct:true,supportsPercentileStatistics:true,supportsSpatialAggregationStatistics:true,supportedSpatialAggregationStatistics:["EnvelopeAggregate","CentroidAggregate","ConvexHullAggregate"],supportsLod:true,supportsQueryWithLodSR:false,supportedLodTypes:["geohash"],supportsReturningGeometryCentroid:false,supportsReturningGeometryProperties:true,supportsQueryWithDatumTransformation:true,supportsHavingClause:true,supportsOutFieldSQLExpression:true,supportsMaxRecordCountFactor:true,supportsTopFeaturesQuery:true,supportsDisjointSpatialRel:true,supportsQueryWithCacheHint:true,supportedOperationsWithCacheHint:["query","queryTopFilter","queryAnalytics","queryAttachments","queryRelated"],supportsQueryAnalytic:true,supportsDefaultSR:true,supportsFullTextSearch:true},
    advancedQueryAnalyticCapabilities:{supportsLinearRegression:true,supportsAsync:true,supportsPercentileAnalytic:true},
    advancedEditingCapabilities:{supportedSqlFormatsInCalculate:["standard"],supportsAsyncApplyEdits:true,supportsReturnEditResults:true},
    infoInEstimates:["extent","count"],useStandardizedQueries:true,geometryType:"esriGeometryPolyline",minScale:150000,maxScale:0,extent:{xmin:-8266144.7918439023,ymin:4938569.7715200111,xmax:-8204248.7873679493,ymax:4999630.6406602357,spatialReference:{wkid:102100,latestWkid:3857}},
    drawingInfo:{renderer:{type:"simple",symbol:{type:"esriSLS",style:"esriSLSSolid",color:[153,0,5,255],width:1},
      label:"",description:""},
    transparency:0,labelingInfo:null},
    allowGeometryUpdates:true,
    hasAttachments:false,
    htmlPopupType:"esriServerHTMLPopupTypeAsHTMLText",
    hasM:false,hasZ:false,objectIdField:"OBJECTID",
    uniqueIdField:{name:"OBJECTID",
      isSystemMaintained:true},
    globalIdField:"GlobalID",
    typeIdField:"",
    fields:
    [{name:"borough",type:"esriFieldTypeString",alias:"borough",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"build_stat",type:"esriFieldTypeString",alias:"build_stat",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"cco_st",type:"esriFieldTypeString",alias:"cco_st",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"date_edit_",type:"esriFieldTypeDate",alias:"date_edit_",sqlType:"sqlTypeOther",length:8,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"time_edit_",type:"esriFieldTypeString",alias:"time_edit_",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"feat_statu",type:"esriFieldTypeString",alias:"feat_statu",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"feat_type",type:"esriFieldTypeString",alias:"feat_type",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"honorary_n",type:"esriFieldTypeString",alias:"honorary_n",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"marg_wharf",type:"esriFieldTypeString",alias:"marg_wharf",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"old_st_nm",type:"esriFieldTypeString",alias:"old_st_nm",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"paper_st",type:"esriFieldTypeString",alias:"paper_st",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"record_st",type:"esriFieldTypeString",alias:"record_st",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"roadway_ty",type:"esriFieldTypeString",alias:"roadway_ty",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"route_type",type:"esriFieldTypeString",alias:"route_type",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"stair_st",type:"esriFieldTypeString",alias:"stair_st",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"street_nm",type:"esriFieldTypeString",alias:"street_nm",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"streetwidt",type:"esriFieldTypeString",alias:"streetwidt",sqlType:"sqlTypeOther",length:254,nullable:true,editable:true,domain:null,defaultValue:null},
      {name:"OBJECTID",type:"esriFieldTypeOID",alias:"OBJECTID",sqlType:"sqlTypeOther",nullable:false,editable:false,domain:null,defaultValue:null},
      {name:"Shape__Length",type:"esriFieldTypeDouble",alias:"Shape__Length",sqlType:"sqlTypeDouble",nullable:true,editable:false,domain:null,defaultValue:null},
      {name:"GlobalID",type:"esriFieldTypeGlobalID",alias:"GlobalID",sqlType:"sqlTypeOther",length:38,nullable:false,editable:false,domain:null,defaultValue:"NEWID() WITH VALUES"}],indexes:[{name:"PK__NEWYORK3__F4B70D858AB09618",fields:"OBJECTID",isAscending:true,isUnique:true,description:""},
      {name:"user_70600.NEWYORK3857_STREET_Shape_sidx",fields:"Shape",isAscending:true,isUnique:false,description:""},
      {name:"Shape__Length_Index",fields:"Shape__Length",isAscending:true,isUnique:false,description:""},
      {name:"GlobalID_Index",fields:"GlobalID",isAscending:false,isUnique:true,description:""}],dateFieldsTimeReference:{timeZone:"UTC",respectsDaylightSaving:false},
    preferredTimeReference:null,types:[],templates:[{name:"Street",description:"",drawingTool:"esriFeatureEditToolLine",prototype:{attributes:{streetwidt:null,borough:null,build_stat:null,cco_st:null,date_edit_:null,time_edit_:null,feat_statu:null,feat_type:null,honorary_n:null,marg_wharf:null,old_st_nm:null,paper_st:null,record_st:null,roadway_ty:null,route_type:null,stair_st:null,street_nm:null}}}],supportedQueryFormats:"JSON, geoJSON, PBF",supportedAppendFormats:"sqlite,geoPackage,shapefile,filegdb,featureCollection,geojson,csv,excel",supportedExportFormats:"csv,shapefile,sqlite,geoPackage,filegdb,featureCollection,geojson,excel",supportedSpatialRelationships:["esriSpatialRelIntersects","esriSpatialRelContains","esriSpatialRelCrosses","esriSpatialRelEnvelopeIntersects","esriSpatialRelIndexIntersects","esriSpatialRelOverlaps","esriSpatialRelTouches","esriSpatialRelWithin","esriSpatialRelDisjoint","esriSpatialRelRelation"],supportedContingentValuesFormats:"JSON, PBF",supportedSyncDataOptions:4,hasStaticData:false,maxRecordCount:1000,standardMaxRecordCount:4000,standardMaxRecordCountNoGeometry:32000,tileMaxRecordCount:4000,maxRecordCountFactor:1,capabilities:"Query,ChangeTracking"};

  public static incompleteDrawingInfo = {
    drawingInfo: {
      renderer: {
        type: "uniqueValue",
        field1: "WEAPON",
        field2: null,
        field3: null,
      },
    },
  };

  public static uniqueValueDrawingInfo = {
    drawingInfo: {
      renderer: {
        type: "uniqueValue",
        field1: "WEAPON",
        field2: null,
        field3: null,
        defaultSymbol: {
          type: "esriPMS",
          url: "964f19a3e2aa1123345490e04eb4a09d",
          imageData: "iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAT9JREFUOI2t1E8rRGEUx/HvMHViIm5ZXGt/3gFlwdKGhYjyAmxs7IassDHFyguwwkbZYJKNslVWJDZT1C3psRv9NMpmJk/Tvc3MHWf3/PuccxbPyfKPkW1wPmBmQ5L6giB4d849Al+tYjNAHpiQ1AHgnAMoA+dhGG5HUfTQCOsCDoGlhCTdwGIURfPVZPtJWCdwBkwntVF3d6+K78Rh+SYhP7bM7FbSjY8FwHqLEEBGUgEY97E5oCcFBjAGDAMvNWwyJVSLKR8L28QG4a/N7zYx+VipTazkY0VgNSVUAa597MrMniWNpMBOAOdjFUlrwAWQaQFywGZt4f+AIrAB7DYJlc1sQdJrHAZQAN6AA6A/STGzp1wut+ycu/f340bQEXAJrACzwCjQC3wAd8CppGNJP/UPk+bZZ7XKQlJ1cfEL1AZaAcKna+kAAAAASUVORK5CYII=",
          contentType: "image/png",
          width: 15,
          height: 15,
          angle: 0,
          xoffset: 0,
          yoffset: 0,
        },
        defaultLabel: "<all other values>",
        uniqueValueInfos: [
          {
            symbol: {
              type: "esriPMS",
              url: "7c83731ca464c53c3e14f4287baaf154",
              imageData: "iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAk1JREFUOI2t0z9oE1EcB/BvmrTPLkofFYSQwQweLYSCmpRcIqHFDrqI4JJrwFaFSIkUipMdFLzlMkiIAaGmhC7BwQ6xhIAtZGiuIJQ41KEZxIZD3i2+pT3sq3jn1FpC0z+kv/F9f3zefw/OuTxn6O0F8PvcQELIayHE83MBKaU3CCHPGGMvAVgdg4qipHK5XA+AOwA+dgwyxu6l02lUq9WJSqXSGUgpHdrZ2bk0OTmJ+fn5MQAXAOyeCFJKg1NTU96RkZHrhxtqtdptSZK6+vv7MTo66qRSqfeDg4M/9nPbtv9ms9m1paUlA8DmAcg531ZV9ZWqqkPj4+OO1+t17WfhcBgAkEgkSKlUShiGAQDY2NhwKpWKC8AnAI9at7wJYJgQkl5fX384OztrDwwM9B1erSzLkGUZjuNgZWXFyOfzFMALANl2ZyiEENONRuNzNBpdyGQyZjwev+Lx/G+zLAuqqv6cm5vbBXALwNcjz7ClypzzgKZp30OhECRJOgh0XYeu69uc85s44k0ed8u93d3dxO/3w7ZtbG1tOX6/3xUIBOB2u31o8w3bgoqiTMRisS7LspyZmRmzWCxe1jRtO5lM9vl8vh5CSEQIsXqWFSaEEHvBYPCPYRgLQog3mqa9W15eHotEIhcVRXlaKBRODXoXFxev6rpumqapCCGqAMAYe1Aul5/U6/W3kiTdBeAC4JwGvA+g1Gw2HwP41ZLlGWOrnPMPlNIQ5/zLiSCldI1znmszGQA0hBDDlNJrrcGRIOe8fgy2X3uMsW+tg/8ALm/uzGg889IAAAAASUVORK5CYII=",
              contentType: "image/png",
              width: 15,
              height: 14,
              angle: 0,
              xoffset: 0,
              yoffset: 0,
            },
            value: " ",
            label: " ",
            description: "test",
          },
          {
            symbol: {
              type: "esriPMS",
              url: "92fc1fd63ca93a4167dd03e55a4c54fe",
              imageData: "iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAepJREFUOI2tk09I1EEUxz9r5kuEwqEgWDzooaVAhEqlLKLIg11C6NK2kP2BIpQgOtWhoL2shwgTgjLCi3jQg4UIFniwFYKwQx30EBVL/PbSu2xLPqP9dXBb9KfrJrtfGIaZ953PzJs3U02FVb0Fby3wq2JAEXlgZrcrAnTOHVLRPjzuAdmygRrVXgapAbqAsbKBeJylH5ihh6kygc65Fv2pu7gEPKcT2AEslQQ651r1hoblpBxcbdC3epoIVewGTuHTyzM5IF8Khhx/GGDOXlkKWCgAVTVDnPsWtxYu4BMmVFh0JN/HECaIWcpWxh/xmSIEvAQuB1NeANpFpN/e20XukmM/9WvyOZpvPvCGFEM44A4wsC7lvMzMbrLINMcY5hFpzrN3jSsLxPkuT2Wpjrrjin7Y8A4DmkRpJsFn2oDIqkgSSJIxtcOGrXuTm1W5lu0ITUAO+IpPEyGagW00UOQbFgdG6eEEVWTxuUWaEfaQIMM16mmgRkQ6zGx2KyeMYSzTym9JybCZPSTBE17TSQc7LWrXecF/A8OM00iStKQlamYzAHicY5KrzPOYCGeAECs1LwnsBib4xhXDfgRiQ3jMoow659pU9V1JoHNuTlUHi2wGsIjRLk72BQMbAlV1fhPYPy17nvcpOPkXnK+o4mU668EAAAAASUVORK5CYII=",
              contentType: "image/png",
              width: 15,
              height: 14,
              angle: 0,
              xoffset: 0,
              yoffset: 0,
            },
            value: "blunt_instrument",
            label: "blunt_instrument",
            description: "",
          },
          {
            symbol: {
              type: "esriPMS",
              url: "70a0856a4503c38b2efa55447af89dc6",
              imageData: "iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAhtJREFUOI2tk0tIlFEYhp8xm5MImYcsLxgk1aBgQxcdyiSKXNQmggiaBrILFGEE0aoWBbnRRYQJQRklQbSohYUIXZCyEYSwKAmFibTB/tn0QdmQn6Z/C81yvE3oC4cD3+U55z2XVBZYqf9Rmwb8XDCgMeayqp5bEKC1dpOIOQ3ORSA+b6DkBKuQei+wG3gwbyDi7CVQC59bK3Fa5ge01vqFHxn4j8DbWxXAEmBwTqC1tkTWnsozuTs2Ttrcl1e7WOZLIW055O90WVF106ws+jRR8Gt0hHd17dr3OAp0TwBFZICO6ktKtZ81h1xMnmeiqWjL2LwhZPjQFNJv0fGm9y5Oiwd4BBxNtNwNBIwxtRp9fZgDF0axhZmT/ORuHRu40PssSlODBc4DdVMsj0tV9Qz0POHutkYqrsYoPJiN55+y4Ti8qO43kRuD6ZZyEd5Me4YJagYp5mXNR7JLwfr+ZvrD4IQHVGWz6tQ3Odstp8FiQ0YBuKPwvdclo8BDVjGwKJ8ZvuHMwJxgJb7tKQzHXZ6fjRG5l0V5zQDrT2Ri870mbspUtS15oJcQIzrEnZJhQ7RR0Su01Vwn8rSCVWVLleBJIreTBubR93A1sXDMEAuqautY2NmP03wc6bxGum8P4AHcZID7gCa075jC14RcA+q0oXLfWlsqIh1zAq217SJSP8NiAD2gAWPsusTEtEAR6ZwF9kdDjuN0JQZ/A6rmxvoAREK5AAAAAElFTkSuQmCC",
              contentType: "image/png",
              width: 15,
              height: 14,
              angle: 0,
              xoffset: 0,
              yoffset: 0,
            },
            value: "gun",
            label: "gun",
            description: "",
          },
          {
            symbol: {
              type: "esriPMS",
              url: "e109df94cd78c13a6d1bc5c2eda6a9a7",
              imageData: "iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAeRJREFUOI2tkztoVEEUhr88yDEsGHZAERaDorEQJOL6CAQ7g8QmXEwhEsyiFhaKjVUguGAnqOADBV/Exi0CQUELLQyuBA1Rm4CxEJEY7m08zaKbk2CuxWblcpPNg92/GZj/55tzZs40UmM1riPbDBRrBhSRK2Z2qSZA51wa1QsGl4HfVQN7VM8/hiagGxiuGhhAzyCQh8xotUDnXHtRteUE8BS6gA3A7KpA59yBftVUh8i+aGBC9cgOqE8CnRBm4H6byPeyH8LfhzD22mwamPoPVNXCDchi1n4cws1QV/bSi2svyEvomzED4AuEo6Xcc+B0vOUp4JCIXJ0w638CC22QjFabjsDfwvQjcMAAcHNJy4syM7v4A155MJSFwIMtDZFAEbgGMzmR2UQicdhUPy97hzG9UNhzB77tBXZGjHHgIxTUbD9mS2ZypVduBmQbsAD8hLAV6nYDDbCVCt+wItCDTAfU/4EwC8EIbBqAwilIpqBJRDrNLL+eCvvmYe4ozAciQ2Z2/R7cfQddadjomZ3LwZqBqRHY/h4CFTlpZm8AfOj14ewk3GqFY5RGJlwL0BN45sMZzH7FvAc+5H3IOecOquqHVYHOuTFVvV3hMICvlGZ2V9xYFqiqn1aAlTXn+/5kfPMfWXyn81sSLa0AAAAASUVORK5CYII=",
              contentType: "image/png",
              width: 15,
              height: 14,
              angle: 0,
              xoffset: 0,
              yoffset: 0,
            },
            value: "knife",
            label: "knife",
            description: "",
          },
          {
            symbol: {
              type: "esriPMS",
              url: "56cdb91cb6c2a0327abe9787dcef4868",
              imageData: "iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAjBJREFUOI2tkz9oU1EUxn8pbd7rUF9zie17KVJSinSIKRg1g7gUO+gSBCcpWNTBQXFxclFwc3BQwUGXTpXiouDikqFJIYtCSaEpFfNafC8QPJSWYG9sfA62JaR/pf3G83387jn3ntvOMav9P7KdwK9jAxqG8VRr/fBYgEqplIjcBx4DtSMDHce5JyJh4Arw/shAEcmkUik8zxv3ff9oQKXUsNbaSiQSFIvFUcAE1g8EKqXOO47TNzAwcLY54HneZcuy2kzTxLbtwLbtNz09Pd+bIo3Z2dkZ13WXgfltoIisiciTubm54f7+/sA0zdCWNzQ0BEAymTQWFhbGVlZWAKhWq4GIhICPwK3WkeeBtGEYzyqVys1MJvMnEolEmruNxWLEYjEAyuXycqlUUsAj4MWOkTeltdYPgM9TU1MTIyMjlcHBQTsU2m6WjY0Ncrncj3K5vK6UuiQiX3e9wxZ9As7k8/lv0WiU5kY9z6Nara5prc9prXfs5H6v3AkY3d3dBEHA6upqYFlWKBqNApxij2+4J9BxnPF4PN5Wr9eDbDZbcV33ZDqdXkskEpGurq5wrVa7qLWePjQwHA6PNRqN+uTk5G9gAnheKBReLy0tjfb29p7o6Oi4u7i4eGhgn+u6cdd1K4Zh3NBaZzfr133fv+P7/kul1FUgBASHAV4DPgC3tdY/W7y3wLSIvFNKXRCRwoFApdSMiLza4zCAEv929nSrsStQRL7sA9tS3ff9YmvxL1UE4IbTTnP+AAAAAElFTkSuQmCC",
              contentType: "image/png",
              width: 15,
              height: 14,
              angle: 0,
              xoffset: 0,
              yoffset: 0,
            },
            value: "other",
            label: "other",
            description: "",
          },
        ],
        fieldDelimiter: ",",
      },
      transparency: 0,
      labelingInfo: null,
    },
  };
}
