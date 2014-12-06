// Written by Jürgen Moßgraber - mossgrabers.de
//            Michael Schmalle - teotigraphix.com
// (c) 2014
// Licensed under LGPLv3 - http://www.gnu.org/licenses/lgpl-3.0.txt

// Display Modes
var MODE_TRACK               = 0;
var MODE_VOLUME              = 1;
var MODE_MASTER              = 2;
var MODE_FRAME               = 3;
var MODE_GROOVE              = 4;
var MODE_ACCENT              = 5;
var MODE_CROSSFADER          = 6;
var MODE_CLIP                = 7;

var MODE_PAN                 = 10;
var MODE_SEND1               = 11;
var MODE_SEND2               = 12;
var MODE_SEND3               = 13;
var MODE_SEND4               = 14;
var MODE_SEND5               = 15;
var MODE_SEND6               = 16;
var MODE_SEND                = 17;

var MODE_PARAM_PAGE_SELECT   = 20;
var MODE_BANK_DEVICE         = 21;
var MODE_BANK_COMMON         = 22;
var MODE_BANK_ENVELOPE       = 23;
var MODE_BANK_MODULATE       = 24;
var MODE_BANK_USER           = 25;
var MODE_BANK_MACRO          = 26;
var MODE_PRESET              = 27;
var MODE_BANK_DIRECT         = 28;
var MODE_DEVICE_LAYER        = 29;

var MODE_SCALES              = 30;
var MODE_FIXED               = 31;
var MODE_SCALE_LAYOUT        = 32;
var MODE_RIBBON              = 33;
var MODE_VIEW_SELECT         = 34;
var MODE_AUTOMATION          = 35;

var MODE_MASTER_TEMP         = 100;

load ("BaseMode.js");

load ("AccentMode.js");
load ("AutomationMode.js");
load ("FixedMode.js");
load ("FrameMode.js");
load ("GrooveMode.js");
load ("RibbonMode.js");
load ("ScalesMode.js");
load ("ScaleLayoutMode.js");
load ("ViewSelectMode.js");

load ("track/AbstractTrackMode.js");
load ("track/ClipMode.js");
load ("track/CrossfaderMode.js");
load ("track/MasterMode.js");
load ("track/PanMode.js");
load ("track/SendMode.js");
load ("track/TrackMode.js");
load ("track/VolumeMode.js");

load ("device/DeviceLayerMode.js");
load ("device/DeviceMode.js");
load ("device/DeviceBankMode.js");
load ("device/DirectParameterMode.js");
load ("device/ParamPageSelectMode.js");
load ("device/BaseParamsMode.js");
load ("device/CommonParamsMode.js");
load ("device/EnvelopeParamsMode.js");
load ("device/ModulationParamsMode.js");
load ("device/MacroParamsMode.js");
load ("device/UserParamsMode.js");
load ("device/PresetMode.js");
