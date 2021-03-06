/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 4.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Enif.controller.StoreLoadController'
    ],
    models: [
        'PlayerData',
        'ChartsData'
    ],
    stores: [
        'GameRawData',
        'PlayerData',
        'EloRatinChart',
        'WinsByColor'
    ],
    views: [
        'grids.PlayerGrids',
        'grids.GameGrid',
        'MainPanel',
        'forms.AddGameForm',
        'charts.EloRating',
        'charts.PlayedGames',
        'charts.WinsByColor',
        'Loading',
        'forms.AddGameDialog'
    ],
    controllers: [
        'StoreLoadController'
    ],
    name: 'Enif',

    /* We need data from Person store for calculation in the views, load store before loading views and other stores */
    launch: function() {
        Ext.create('Enif.view.Loading', {fullscreen: true});


        Ext.getStore('PlayerData').load({
            callback: function (records, operation, success) {
                if(success){
                    Ext.first('#loading').destroy();
                    Ext.create('Enif.view.MainPanel', {fullscreen: true});
                } else {
                    console.error('Error loading the application');
                    Ext.toast('Error loading the application', 55000);
                }
            }
        });
    }

});
