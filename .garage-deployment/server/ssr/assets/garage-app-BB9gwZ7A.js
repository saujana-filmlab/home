import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region components/ui/button.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Button({ className = "", variant = "primary", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: `button button-${variant} ${className}`,
		...props
	});
}
//#endregion
//#region components/ui/input.tsx
function Input({ className = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: `text-input ${className}`,
		...props
	});
}
//#endregion
//#region data/film-catalog.ts
var filmCatalog = [
	{
		manufacturer: "AgfaPhoto",
		filmName: "AgfaPhoto APX 100"
	},
	{
		manufacturer: "AgfaPhoto",
		filmName: "AgfaPhoto APX 400"
	},
	{
		manufacturer: "Eastman Kodak",
		filmName: "Eastman Double-X"
	},
	{
		manufacturer: "Foma Bohemia",
		filmName: "Fomapan 100"
	},
	{
		manufacturer: "Foma Bohemia",
		filmName: "Fomapan 200"
	},
	{
		manufacturer: "Foma Bohemia",
		filmName: "Fomapan 400"
	},
	{
		manufacturer: "ILFORD",
		filmName: "ILFORD Delta 100"
	},
	{
		manufacturer: "ILFORD",
		filmName: "ILFORD Delta 400"
	},
	{
		manufacturer: "ILFORD",
		filmName: "ILFORD Delta 3200"
	},
	{
		manufacturer: "ILFORD",
		filmName: "ILFORD Pan F Plus 50"
	},
	{
		manufacturer: "ILFORD",
		filmName: "ILFORD Pan 100"
	},
	{
		manufacturer: "ILFORD",
		filmName: "ILFORD Pan 400"
	},
	{
		manufacturer: "ILFORD",
		filmName: "ILFORD HP5 Plus"
	},
	{
		manufacturer: "HARMAN",
		filmName: "Kentmere PAN 100"
	},
	{
		manufacturer: "HARMAN",
		filmName: "Kentmere PAN 200"
	},
	{
		manufacturer: "HARMAN",
		filmName: "Kentmere PAN 400"
	},
	{
		manufacturer: "Kodak",
		filmName: "Kodak T-MAX 100"
	},
	{
		manufacturer: "Kodak",
		filmName: "Kodak T-MAX 400"
	},
	{
		manufacturer: "Kodak",
		filmName: "Kodak T-MAX P3200"
	},
	{
		manufacturer: "Kodak",
		filmName: "Kodak Tri-X 400 / 400TX"
	}
];
//#endregion
//#region data/recipes.ts
var shared = {
	developer: "ILFORD ID-11",
	dilution: "Stock",
	referenceTemperatureC: 20,
	validatedTemperatureRangeC: [20, 24],
	temperatureMethod: "ilford_10_percent_per_celsius",
	agitationPattern: "Use gentle inversions or turn the center agitator stick for the first 10 seconds, then 10 seconds at the start of every minute.",
	verificationStatus: "reference_only",
	version: "2026.09-ref-02"
};
var massiveDevChartUrl = "https://www.digitaltruth.com/devchart.php?Developer=ID-11%25&Film=&TempUnits=C&TimeUnits=T&mdc=Search";
function chartRecipe({ chartNote, ...recipe }) {
	return {
		...shared,
		...recipe,
		sourceUrl: massiveDevChartUrl,
		sourceNotes: `ID-11 stock at 20°C.${chartNote ? ` ${chartNote}` : ""}`
	};
}
var recipes = [
	chartRecipe({
		id: "agfaphoto-apx-100-id11-stock",
		manufacturer: "AgfaPhoto",
		filmName: "AgfaPhoto APX 100",
		format: ["35mm"],
		exposureLabel: "Normal",
		exposureIndex: 100,
		baseSeconds: 540
	}),
	chartRecipe({
		id: "agfaphoto-apx-400-id11-stock",
		manufacturer: "AgfaPhoto",
		filmName: "AgfaPhoto APX 400",
		format: ["35mm"],
		exposureLabel: "Normal",
		exposureIndex: 400,
		baseSeconds: 570
	}),
	chartRecipe({
		id: "eastman-double-x-250-id11-stock",
		manufacturer: "Eastman Kodak",
		filmName: "Eastman Double-X",
		format: ["35mm"],
		exposureLabel: "Normal",
		exposureIndex: 250,
		baseSeconds: 420,
		chartNote: "Chart film name: Eastman Double-X (5222)."
	}),
	chartRecipe({
		id: "fomapan-100-id11-stock",
		manufacturer: "Foma Bohemia",
		filmName: "Fomapan 100",
		format: [
			"35mm",
			"120",
			"Sheet"
		],
		exposureLabel: "Normal",
		exposureIndex: 100,
		baseSeconds: 390,
		chartNote: "The chart lists 6–7 minutes; 6:30 is the midpoint used as the timer starting point."
	}),
	chartRecipe({
		id: "fomapan-200-id11-stock",
		manufacturer: "Foma Bohemia",
		filmName: "Fomapan 200",
		format: [
			"35mm",
			"120",
			"Sheet"
		],
		exposureLabel: "Normal",
		exposureIndex: 200,
		baseSeconds: 330,
		chartNote: "The chart lists 5–6 minutes; 5:30 is the midpoint used as the timer starting point."
	}),
	chartRecipe({
		id: "fomapan-400-id11-stock",
		manufacturer: "Foma Bohemia",
		filmName: "Fomapan 400",
		format: [
			"35mm",
			"120",
			"Sheet"
		],
		exposureLabel: "Normal",
		exposureIndex: 400,
		baseSeconds: 450,
		chartNote: "The chart lists 7–8 minutes; 7:30 is the midpoint used as the timer starting point."
	}),
	chartRecipe({
		id: "ilford-delta-100-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD Delta 100",
		format: [
			"35mm",
			"120",
			"Sheet"
		],
		exposureLabel: "Normal",
		exposureIndex: 100,
		baseSeconds: 510
	}),
	chartRecipe({
		id: "ilford-delta-3200-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD Delta 3200",
		format: ["35mm", "120"],
		exposureLabel: "Normal",
		exposureIndex: 3200,
		baseSeconds: 630,
		chartNote: "Chart film name: Ilford Delta 3200 Pro."
	}),
	chartRecipe({
		id: "ilford-delta-400-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD Delta 400",
		format: [
			"35mm",
			"120",
			"Sheet"
		],
		exposureLabel: "Normal",
		exposureIndex: 400,
		baseSeconds: 570
	}),
	chartRecipe({
		id: "ilford-fp4-plus-125-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD FP4 Plus",
		format: [
			"35mm",
			"120",
			"Sheet"
		],
		exposureLabel: "Normal",
		exposureIndex: 125,
		baseSeconds: 510,
		chartNote: "Chart film name: Ilford FP4+."
	}),
	chartRecipe({
		id: "ilford-hp5-plus-400-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD HP5 Plus",
		format: [
			"35mm",
			"120",
			"Sheet"
		],
		exposureLabel: "Normal",
		exposureIndex: 400,
		baseSeconds: 450,
		chartNote: "Chart film name: Ilford HP5+."
	}),
	chartRecipe({
		id: "ilford-hp5-plus-800-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD HP5 Plus",
		format: [
			"35mm",
			"120",
			"Sheet"
		],
		exposureLabel: "Push +1",
		exposureIndex: 800,
		baseSeconds: 630,
		chartNote: "Chart film name: Ilford HP5+."
	}),
	chartRecipe({
		id: "ilford-hp5-plus-1600-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD HP5 Plus",
		format: [
			"35mm",
			"120",
			"Sheet"
		],
		exposureLabel: "Push +2",
		exposureIndex: 1600,
		baseSeconds: 840,
		chartNote: "Chart film name: Ilford HP5+."
	}),
	chartRecipe({
		id: "ilford-pan-100-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD Pan 100",
		format: ["35mm"],
		exposureLabel: "Normal",
		exposureIndex: 100,
		baseSeconds: 420
	}),
	chartRecipe({
		id: "ilford-pan-400-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD Pan 400",
		format: ["35mm"],
		exposureLabel: "Normal",
		exposureIndex: 400,
		baseSeconds: 420
	}),
	chartRecipe({
		id: "ilford-pan-f-plus-50-id11-stock",
		manufacturer: "ILFORD",
		filmName: "ILFORD Pan F Plus 50",
		format: ["35mm", "120"],
		exposureLabel: "Normal",
		exposureIndex: 50,
		baseSeconds: 390,
		chartNote: "Chart film name: Ilford Pan F+."
	}),
	chartRecipe({
		id: "kentmere-pan-100-id11-stock",
		manufacturer: "HARMAN",
		filmName: "Kentmere PAN 100",
		format: ["35mm", "120"],
		exposureLabel: "Normal",
		exposureIndex: 100,
		baseSeconds: 540,
		chartNote: "Chart film name: Kentmere 100."
	}),
	chartRecipe({
		id: "kentmere-pan-200-id11-stock",
		manufacturer: "HARMAN",
		filmName: "Kentmere PAN 200",
		format: ["35mm", "120"],
		exposureLabel: "Normal",
		exposureIndex: 200,
		baseSeconds: 450,
		chartNote: "Chart film name: Kentmere 200."
	}),
	chartRecipe({
		id: "kentmere-pan-400-id11-stock",
		manufacturer: "HARMAN",
		filmName: "Kentmere PAN 400",
		format: ["35mm", "120"],
		exposureLabel: "Normal",
		exposureIndex: 400,
		baseSeconds: 570,
		chartNote: "Chart film name: Kentmere 400."
	}),
	chartRecipe({
		id: "kodak-tmax-100-id11-stock",
		manufacturer: "Kodak",
		filmName: "Kodak T-MAX 100",
		format: ["35mm", "120"],
		exposureLabel: "Normal",
		exposureIndex: 100,
		baseSeconds: 390,
		chartNote: "The 35mm and 120 chart time is used; the listed sheet-film time differs."
	}),
	chartRecipe({
		id: "kodak-tmax-400-id11-stock",
		manufacturer: "Kodak",
		filmName: "Kodak T-MAX 400",
		format: ["35mm", "120"],
		exposureLabel: "Normal",
		exposureIndex: 400,
		baseSeconds: 450,
		chartNote: "The 35mm and 120 chart time is used; the listed sheet-film time differs."
	}),
	chartRecipe({
		id: "kodak-tmax-p3200-id11-stock",
		manufacturer: "Kodak",
		filmName: "Kodak T-MAX P3200",
		format: ["35mm"],
		exposureLabel: "Normal",
		exposureIndex: 3200,
		baseSeconds: 840,
		chartNote: "The chart contains 14- and 15-minute entries at EI 3200; the first listed time, 14 minutes, is used as the timer starting point."
	}),
	chartRecipe({
		id: "kodak-trix-400-id11-stock",
		manufacturer: "Kodak",
		filmName: "Kodak Tri-X 400 / 400TX",
		format: ["35mm", "120"],
		exposureLabel: "Normal",
		exposureIndex: 400,
		baseSeconds: 405,
		chartNote: "The chart contains several EI 400 stock entries; the first listed time, 6:45, is used as the timer starting point."
	})
];
var filmNames = Array.from(new Set(recipes.map((recipe) => recipe.filmName)));
//#endregion
//#region lib/calculations.mjs
var CAPACITY_MULTIPLIERS = Object.freeze([
	1,
	1.1,
	1.2,
	1.3,
	1.4,
	1.5,
	1.6,
	1.7,
	1.8,
	1.9
]);
function capacityMultiplier(filmNumber) {
	if (!Number.isInteger(filmNumber) || filmNumber < 1 || filmNumber > 10) throw new RangeError("Film number must be an integer from 1 to 10.");
	return CAPACITY_MULTIPLIERS[filmNumber - 1];
}
function batchLoad(firstFilmNumber, rollsAtOnce = 1) {
	capacityMultiplier(firstFilmNumber);
	if (!Number.isInteger(rollsAtOnce) || rollsAtOnce < 1) throw new RangeError("Rolls in the tank must be a positive whole number.");
	const blackboardTotal = firstFilmNumber + rollsAtOnce - 1;
	if (blackboardTotal > 10) throw new RangeError("This load would take the one-liter batch past roll 10.");
	return {
		developmentFilmNumber: firstFilmNumber,
		blackboardTotal
	};
}
function ilfordTemperatureFactor(temperatureC, referenceTemperatureC = 20) {
	if (!Number.isFinite(temperatureC) || temperatureC < 20 || temperatureC > 25.5) throw new RangeError("The Garage supports ID-11 temperatures from 20–25.5°C.");
	const difference = temperatureC - referenceTemperatureC;
	return difference >= 0 ? .9 ** difference : 1.1 ** Math.abs(difference);
}
function roundSeconds(seconds, increment = 5) {
	if (!Number.isFinite(seconds) || seconds < 0 || !Number.isFinite(increment) || increment <= 0) throw new RangeError("Time and rounding increment must be valid positive numbers.");
	return Math.round(seconds / increment) * increment;
}
function calculateDevelopmentTime({ baseSeconds, temperatureC, referenceTemperatureC = 20, filmNumber, roundingSeconds = 5 }) {
	if (!Number.isFinite(baseSeconds) || baseSeconds <= 0) throw new RangeError("Base time must be positive.");
	const temperatureFactor = ilfordTemperatureFactor(temperatureC, referenceTemperatureC);
	const capacity = capacityMultiplier(filmNumber);
	const temperatureAdjustedSeconds = baseSeconds * temperatureFactor;
	const rawFinalSeconds = temperatureAdjustedSeconds * capacity;
	return {
		temperatureFactor,
		temperatureOutsideOfficialRange: temperatureC > 24,
		capacityMultiplier: capacity,
		temperatureAdjustedSeconds,
		calculatedSeconds: roundSeconds(rawFinalSeconds, roundingSeconds)
	};
}
function formatTime(totalSeconds) {
	const seconds = Math.max(0, Math.round(totalSeconds));
	return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
//#endregion
//#region components/garage-app.tsx
var DEFAULT_SETTINGS = {
	stopBathEnabled: true,
	photoFloEnabled: false,
	stopBathSeconds: 30,
	fixSeconds: 300,
	washSeconds: 600,
	photoFloSeconds: 30,
	drainWarningSeconds: 15,
	sound: true,
	vibration: true
};
var APP_BASE_PATH = "/garage";
var DEVELOPERS = ["ILFORD ID-11"];
var DILUTIONS = ["Stock", "1+1"];
function parseNumericInput(value) {
	if (value.trim() === "") return "";
	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : "";
}
function minutesFromSeconds(value) {
	return value === "" ? "" : value / 60;
}
function resolveWorkflowSettings(settings) {
	if ([
		settings.stopBathSeconds,
		settings.fixSeconds,
		settings.washSeconds,
		settings.photoFloSeconds,
		settings.drainWarningSeconds
	].some((value) => typeof value !== "number" || !Number.isFinite(value))) return null;
	return {
		...settings,
		stopBathSeconds: settings.stopBathSeconds,
		fixSeconds: settings.fixSeconds,
		washSeconds: settings.washSeconds,
		photoFloSeconds: settings.photoFloSeconds,
		drainWarningSeconds: settings.drainWarningSeconds
	};
}
function recipeKey(recipe) {
	return `${recipe.filmName.toLocaleLowerCase()}|${recipe.developer.toLocaleLowerCase()}|${recipe.dilution.toLocaleLowerCase()}|${recipe.exposureIndex}`;
}
function mergeRecipes(sharedRecipes) {
	const merged = /* @__PURE__ */ new Map();
	for (const recipe of recipes) merged.set(recipeKey(recipe), recipe);
	for (const recipe of sharedRecipes) merged.set(recipeKey(recipe), recipe);
	return Array.from(merged.values()).sort((a, b) => a.filmName.localeCompare(b.filmName, void 0, {
		sensitivity: "base",
		numeric: true
	}) || a.exposureIndex - b.exposureIndex || a.dilution.localeCompare(b.dilution));
}
function createStages(result, settings) {
	const developerLabel = `${result.recipe.developer} ${result.recipe.dilution}`;
	const reusableStock = result.recipe.dilution.toLocaleLowerCase() === "stock";
	return [
		{
			key: "pour",
			progressKey: "develop",
			label: "Pour developer",
			instruction: `Pour ${developerLabel} into the tank. Start only when the lid is secure.`
		},
		{
			key: "develop",
			progressKey: "develop",
			label: "Develop",
			duration: result.finalSeconds,
			instruction: "Keep the tank steady between cycles. When prompted, use gentle inversions or the center agitator stick.",
			agitation: result.recipe.agitationPattern,
			agitationMode: "interval"
		},
		{
			key: "drain",
			progressKey: "develop",
			label: "Drain developer",
			instruction: reusableStock ? "Drain the developer completely and return it to the marked one-liter bottle." : "Drain the one-shot developer completely and dispose of it using the lab procedure."
		},
		...settings.stopBathEnabled ? [{
			key: "stop",
			progressKey: "stop",
			label: "Stop bath",
			duration: settings.stopBathSeconds,
			instruction: "Add stop bath and agitate continuously with gentle inversions or the center agitator stick.",
			agitation: "Continuous gentle agitation: invert the tank or turn the center stick.",
			agitationMode: "continuous"
		}] : [],
		{
			key: "fix",
			progressKey: "fix",
			label: "Fix",
			duration: settings.fixSeconds,
			instruction: "Fix with calm, regular inversions or turns of the center agitator stick.",
			agitation: "Agitate for 10 seconds at the start of each minute.",
			agitationMode: "interval"
		},
		{
			key: "wash",
			progressKey: "wash",
			label: "Wash",
			duration: settings.washSeconds,
			instruction: "Wash with clean running water.",
			agitation: "No tank agitation required.",
			agitationMode: "none"
		},
		...settings.photoFloEnabled ? [{
			key: "photoflo",
			progressKey: "photoflo",
			label: "Photo-Flo",
			duration: settings.photoFloSeconds,
			instruction: "Add Photo-Flo, or use one drop of dish soap. Let the tank rest briefly. Do not agitate or rinse.",
			agitation: "Let it rest for this final step.",
			agitationMode: "none"
		}] : []
	];
}
function playCue(vibrate) {
	try {
		const AudioContextClass = window.AudioContext || window.webkitAudioContext;
		if (AudioContextClass) {
			const context = new AudioContextClass();
			const oscillator = context.createOscillator();
			const gain = context.createGain();
			oscillator.frequency.value = 660;
			gain.gain.setValueAtTime(1e-4, context.currentTime);
			gain.gain.exponentialRampToValueAtTime(.12, context.currentTime + .02);
			gain.gain.exponentialRampToValueAtTime(1e-4, context.currentTime + .22);
			oscillator.connect(gain).connect(context.destination);
			oscillator.start();
			oscillator.stop(context.currentTime + .24);
		}
		if (vibrate && navigator.vibrate) navigator.vibrate([
			180,
			80,
			180
		]);
	} catch {}
}
function GarageApp() {
	const [mode, setMode] = (0, import_react.useState)("process");
	const [processKind, setProcessKind] = (0, import_react.useState)("recipe");
	const [film, setFilm] = (0, import_react.useState)("ILFORD HP5 Plus");
	const [customRecipes, setCustomRecipes] = (0, import_react.useState)([]);
	const allRecipes = (0, import_react.useMemo)(() => mergeRecipes(customRecipes), [customRecipes]);
	const [developer, setDeveloper] = (0, import_react.useState)(DEVELOPERS[0]);
	const [dilution, setDilution] = (0, import_react.useState)(DILUTIONS[0]);
	const availableRecipes = (0, import_react.useMemo)(() => allRecipes.filter((recipe) => recipe.filmName === film && recipe.developer === developer && recipe.dilution === dilution), [
		allRecipes,
		developer,
		dilution,
		film
	]);
	const filmOptions = (0, import_react.useMemo)(() => Array.from(new Set([
		...filmCatalog.map((entry) => entry.filmName),
		...filmNames,
		...allRecipes.map((recipe) => recipe.filmName)
	])).sort((a, b) => a.localeCompare(b, void 0, {
		sensitivity: "base",
		numeric: true
	})), [allRecipes]);
	const [recipeId, setRecipeId] = (0, import_react.useState)("ilford-hp5-plus-400-id11-stock");
	const [temperature, setTemperature] = (0, import_react.useState)(20);
	const [filmNumber, setFilmNumber] = (0, import_react.useState)(7);
	const [rollsAtOnce, setRollsAtOnce] = (0, import_react.useState)(1);
	const [format, setFormat] = (0, import_react.useState)("35mm");
	const [settings, setSettings] = (0, import_react.useState)(DEFAULT_SETTINGS);
	const [result, setResult] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [manualOverrideOpen, setManualOverrideOpen] = (0, import_react.useState)(false);
	const [manualMinutes, setManualMinutes] = (0, import_react.useState)("");
	const [manualFilm, setManualFilm] = (0, import_react.useState)("");
	const [manualIso, setManualIso] = (0, import_react.useState)(400);
	const [manualDevelopmentMinutes, setManualDevelopmentMinutes] = (0, import_react.useState)(8);
	const [session, setSession] = (0, import_react.useState)(null);
	const [guideEndedEarly, setGuideEndedEarly] = (0, import_react.useState)(false);
	const [customRecipeOpen, setCustomRecipeOpen] = (0, import_react.useState)(false);
	const [editingRecipeId, setEditingRecipeId] = (0, import_react.useState)(null);
	const [savingCustomRecipe, setSavingCustomRecipe] = (0, import_react.useState)(false);
	const [customRecipeStatus, setCustomRecipeStatus] = (0, import_react.useState)("");
	const [recipePassKey, setRecipePassKey] = (0, import_react.useState)("");
	const [recipeDraft, setRecipeDraft] = (0, import_react.useState)({
		manufacturer: "",
		filmName: "",
		developer: DEVELOPERS[0],
		dilution: DILUTIONS[0],
		exposureLabel: "Normal",
		exposureIndex: 400,
		baseMinutes: 7.5,
		sourceUrl: "",
		sourceNotes: ""
	});
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const chimedStage = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		localStorage.removeItem("garage.activeRun");
		fetch(`${APP_BASE_PATH}/api/custom-recipes`).then(async (response) => {
			if (!response.ok) throw new Error("The shared recipe library is unavailable.");
			const payload = await response.json();
			const loadedRecipes = Array.isArray(payload.recipes) ? payload.recipes : [];
			setCustomRecipes(loadedRecipes);
			const initialRecipe = mergeRecipes(loadedRecipes).find((recipe) => recipe.filmName === "ILFORD HP5 Plus" && recipe.developer === DEVELOPERS[0] && recipe.dilution === DILUTIONS[0]);
			if (initialRecipe) setRecipeId(initialRecipe.id);
		}).catch(() => setCustomRecipeStatus("Shared recipes are unavailable right now. Please try again shortly."));
		if ("serviceWorker" in navigator) navigator.serviceWorker.register(`${APP_BASE_PATH}/sw.js`, { scope: `${APP_BASE_PATH}/` }).catch(() => void 0);
	}, []);
	(0, import_react.useEffect)(() => {
		if (mode !== "timer" || !session?.running) return;
		const interval = window.setInterval(() => setNow(Date.now()), 250);
		return () => window.clearInterval(interval);
	}, [mode, session?.running]);
	(0, import_react.useEffect)(() => {
		if (mode !== "timer" || !session?.running) return;
		let lock = null;
		navigator.wakeLock?.request("screen").then((value) => {
			lock = value;
		}).catch(() => void 0);
		return () => {
			lock?.release().catch(() => void 0);
		};
	}, [
		mode,
		session?.running,
		session?.stageIndex
	]);
	const stages = (0, import_react.useMemo)(() => session ? createStages(session.result, session.settings) : [], [session]);
	const stage = session ? stages[session.stageIndex] : void 0;
	const remaining = session ? session.running && session.endAt ? Math.max(0, Math.ceil((session.endAt - now) / 1e3)) : session.remaining : 0;
	const stageComplete = Boolean(stage?.duration && remaining <= 0);
	(0, import_react.useEffect)(() => {
		if (!session || !stageComplete || chimedStage.current === session.stageIndex) return;
		chimedStage.current = session.stageIndex;
		setSession((current) => current ? {
			...current,
			running: false,
			remaining: 0,
			endAt: null
		} : current);
		if (session.settings.sound) playCue(session.settings.vibration);
		else if (session.settings.vibration && navigator.vibrate) navigator.vibrate([
			180,
			80,
			180
		]);
	}, [session, stageComplete]);
	const recipesForContext = (name, nextDeveloper = developer, nextDilution = dilution) => allRecipes.filter((recipe) => recipe.filmName === name && recipe.developer === nextDeveloper && recipe.dilution === nextDilution);
	const selectFilm = (name) => {
		const options = recipesForContext(name);
		setFilm(name);
		setRecipeId(options[0]?.id ?? "");
		setResult(null);
	};
	const selectDeveloper = (nextDeveloper) => {
		const options = recipesForContext(film, nextDeveloper, dilution);
		setDeveloper(nextDeveloper);
		setRecipeId(options[0]?.id ?? "");
		setResult(null);
	};
	const selectDilution = (nextDilution) => {
		const options = recipesForContext(film, developer, nextDilution);
		setDilution(nextDilution);
		setRecipeId(options[0]?.id ?? "");
		setResult(null);
	};
	const openCustomRecipe = (recipe) => {
		const catalogEntry = filmCatalog.find((entry) => entry.filmName === (recipe?.filmName ?? film));
		setEditingRecipeId(recipe?.id.startsWith("shared-") ? recipe.id : null);
		setRecipeDraft({
			manufacturer: recipe?.manufacturer ?? catalogEntry?.manufacturer ?? "",
			filmName: recipe?.filmName ?? film,
			developer: recipe?.developer ?? developer,
			dilution: recipe?.dilution ?? dilution,
			exposureLabel: recipe?.exposureLabel ?? "Normal",
			exposureIndex: recipe?.exposureIndex ?? 400,
			baseMinutes: recipe ? recipe.baseSeconds / 60 : 7.5,
			sourceUrl: recipe?.sourceUrl ?? "",
			sourceNotes: recipe?.sourceNotes ?? ""
		});
		setCustomRecipeStatus(recipe && !recipe.id.startsWith("shared-") ? "Saving this built-in timing creates a shared staff override." : "");
		setCustomRecipeOpen(true);
	};
	const saveCustomRecipe = async () => {
		const filmName = recipeDraft.filmName.trim();
		const manufacturer = recipeDraft.manufacturer.trim();
		const exposureIndex = recipeDraft.exposureIndex;
		const baseMinutes = recipeDraft.baseMinutes;
		if (!filmName || !manufacturer || typeof exposureIndex !== "number" || exposureIndex <= 0 || typeof baseMinutes !== "number" || baseMinutes <= 0) {
			setCustomRecipeStatus("Add the manufacturer, film name, ISO, and tested base time before saving the recipe.");
			return;
		}
		if (!recipePassKey.trim()) {
			setCustomRecipeStatus("Enter the staff pass key before saving the recipe.");
			return;
		}
		const customRecipe = {
			manufacturer,
			filmName,
			format: [
				"35mm",
				"120",
				"Sheet"
			],
			exposureLabel: recipeDraft.exposureLabel,
			exposureIndex,
			developer: recipeDraft.developer,
			dilution: recipeDraft.dilution,
			baseSeconds: Math.round(baseMinutes * 60),
			referenceTemperatureC: 20,
			validatedTemperatureRangeC: [20, 24],
			temperatureMethod: "ilford_10_percent_per_celsius",
			agitationPattern: "Use gentle inversions or turn the center agitator stick for the first 10 seconds, then 10 seconds at the start of every minute.",
			sourceUrl: recipeDraft.sourceUrl.trim(),
			sourceNotes: recipeDraft.sourceNotes.trim() || "Staff-entered timing; no additional source notes provided."
		};
		setSavingCustomRecipe(true);
		setCustomRecipeStatus("");
		try {
			const response = await fetch(`${APP_BASE_PATH}/api/custom-recipes${editingRecipeId ? `?id=${encodeURIComponent(editingRecipeId)}` : ""}`, {
				method: editingRecipeId ? "PUT" : "POST",
				headers: {
					"Content-Type": "application/json",
					"X-Garage-Recipe-Key": recipePassKey.trim()
				},
				body: JSON.stringify(customRecipe)
			});
			const payload = await response.json();
			if (!response.ok || !payload.recipe) throw new Error(payload.error || "The shared recipe could not be saved.");
			setCustomRecipes((current) => [...current.filter((item) => item.id !== payload.recipe.id && recipeKey(item) !== recipeKey(payload.recipe)), payload.recipe]);
			setFilm(filmName);
			setDeveloper(payload.recipe.developer);
			setDilution(payload.recipe.dilution);
			setRecipeId(payload.recipe.id);
			setCustomRecipeOpen(false);
			setEditingRecipeId(null);
			setRecipePassKey("");
			setResult(null);
			setError("");
			setCustomRecipeStatus("Saved to the shared online recipe library.");
		} catch (reason) {
			setCustomRecipeStatus(reason instanceof Error ? reason.message : "The shared recipe could not be saved.");
		} finally {
			setSavingCustomRecipe(false);
		}
	};
	const deleteCustomRecipe = async (recipe) => {
		if (!recipePassKey.trim()) {
			setCustomRecipeStatus("Enter the staff pass key before deleting a recipe.");
			return;
		}
		if (!recipe.id.startsWith("shared-") || !window.confirm(`Delete the shared ${recipe.filmName} ISO ${recipe.exposureIndex} ${recipe.dilution} recipe?`)) return;
		try {
			const response = await fetch(`${APP_BASE_PATH}/api/custom-recipes?id=${encodeURIComponent(recipe.id)}`, {
				method: "DELETE",
				headers: { "X-Garage-Recipe-Key": recipePassKey.trim() }
			});
			const payload = await response.json();
			if (!response.ok) throw new Error(payload.error || "The shared recipe could not be deleted.");
			setCustomRecipes((current) => current.filter((item) => item.id !== recipe.id));
			if (recipeId === recipe.id) setRecipeId("");
			setRecipePassKey("");
			setCustomRecipeStatus("Shared recipe deleted.");
		} catch (reason) {
			setCustomRecipeStatus(reason instanceof Error ? reason.message : "The shared recipe could not be deleted.");
		}
	};
	const calculate = () => {
		try {
			const recipe = availableRecipes.find((item) => item.id === recipeId) ?? availableRecipes[0];
			if (!recipe) throw new Error("Choose a film with a stored exposure recipe.");
			if (recipe.id !== recipeId) setRecipeId(recipe.id);
			if (typeof temperature !== "number" || temperature < 20 || temperature > 25.5) throw new Error("Enter a chemistry temperature from 20°C to 25.5°C.");
			const stockLoad = recipe.dilution === "Stock" ? batchLoad(filmNumber, rollsAtOnce) : {
				developmentFilmNumber: 1,
				blackboardTotal: 1
			};
			const calculation = calculateDevelopmentTime({
				baseSeconds: recipe.baseSeconds,
				referenceTemperatureC: recipe.referenceTemperatureC,
				temperatureC: temperature,
				filmNumber: stockLoad.developmentFilmNumber
			});
			setResult({
				...calculation,
				recipe,
				finalSeconds: calculation.calculatedSeconds
			});
			setManualMinutes((calculation.calculatedSeconds / 60).toFixed(2));
			setError("");
		} catch (reason) {
			setResult(null);
			setError(reason instanceof Error ? reason.message : "This combination is not supported.");
		}
	};
	const applyOverride = () => {
		const seconds = Math.round(Number(manualMinutes) * 60);
		if (!result || !Number.isFinite(seconds) || seconds <= 0) return;
		setResult({
			...result,
			finalSeconds: seconds
		});
		setManualOverrideOpen(false);
	};
	const startRun = () => {
		const runSettings = resolveWorkflowSettings(settings);
		if (!result || typeof temperature !== "number") return;
		if (!runSettings) {
			setError("Complete every workflow timing field before starting the timer.");
			return;
		}
		setGuideEndedEarly(false);
		setSession({
			result,
			temperature,
			filmNumber,
			rollsAtOnce,
			format,
			settings: runSettings,
			manualTiming: false,
			stageIndex: 0,
			duration: 0,
			remaining: 0,
			endAt: null,
			running: false,
			startedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		setNow(Date.now());
		setMode("timer");
	};
	const startManualRun = () => {
		const runSettings = resolveWorkflowSettings(settings);
		const seconds = typeof manualDevelopmentMinutes === "number" ? Math.round(manualDevelopmentMinutes * 60) : 0;
		if (!runSettings) {
			setError("Complete every workflow timing field before starting the timer.");
			return;
		}
		if (!seconds || seconds > 14400) {
			setError("Enter a development time up to four hours.");
			return;
		}
		if (typeof temperature !== "number" || temperature < 20 || temperature > 25.5) {
			setError("Enter a chemistry temperature from 20°C to 25.5°C.");
			return;
		}
		const manualResult = {
			recipe: {
				id: `manual-${Date.now()}`,
				manufacturer: "Staff timer",
				filmName: manualFilm.trim() || "Film not specified",
				format: [format],
				exposureLabel: "Custom EI",
				exposureIndex: typeof manualIso === "number" ? manualIso : 0,
				developer,
				dilution,
				baseSeconds: seconds,
				referenceTemperatureC: temperature,
				validatedTemperatureRangeC: [20, 25.5],
				temperatureMethod: "ilford_10_percent_per_celsius",
				agitationPattern: "Use gentle inversions or turn the center agitator stick for the first 10 seconds, then 10 seconds at the start of every minute.",
				sourceUrl: "",
				sourceNotes: "Manual staff timer.",
				verificationStatus: "unverified",
				version: "manual-timer"
			},
			finalSeconds: seconds,
			calculatedSeconds: seconds,
			temperatureAdjustedSeconds: seconds,
			temperatureFactor: 1,
			temperatureOutsideOfficialRange: temperature > 24,
			capacityMultiplier: 1
		};
		setGuideEndedEarly(false);
		setResult(null);
		setSession({
			result: manualResult,
			temperature,
			filmNumber: 1,
			rollsAtOnce: 1,
			format,
			settings: runSettings,
			manualTiming: true,
			stageIndex: 0,
			duration: 0,
			remaining: 0,
			endAt: null,
			running: false,
			startedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		setNow(Date.now());
		setMode("timer");
		setError("");
	};
	const enterStage = (nextIndex) => {
		if (!session) return;
		const nextStage = stages[nextIndex];
		if (!nextStage) {
			setGuideEndedEarly(false);
			setMode("complete");
			return;
		}
		const duration = nextStage.duration ?? 0;
		chimedStage.current = null;
		setNow(Date.now());
		setSession({
			...session,
			stageIndex: nextIndex,
			duration,
			remaining: duration,
			endAt: duration ? Date.now() + duration * 1e3 : null,
			running: Boolean(duration)
		});
	};
	const pauseResume = () => {
		if (!session || !stage?.duration) return;
		if (session.running) setSession({
			...session,
			running: false,
			remaining,
			endAt: null
		});
		else setSession({
			...session,
			running: true,
			remaining,
			endAt: Date.now() + remaining * 1e3
		});
	};
	const addTime = () => {
		if (!session || !stage?.duration) return;
		const nextRemaining = remaining + 30;
		setSession({
			...session,
			remaining: nextRemaining,
			duration: session.duration + 30,
			endAt: session.running ? Date.now() + nextRemaining * 1e3 : null
		});
	};
	const restartStage = () => {
		if (!session || !stage?.duration) return;
		chimedStage.current = null;
		setSession({
			...session,
			remaining: stage.duration,
			duration: stage.duration,
			endAt: Date.now() + stage.duration * 1e3,
			running: true
		});
	};
	const skipStage = () => {
		if (!session || !stage || !window.confirm(`Skip ${stage.label}?`)) return;
		enterStage(session.stageIndex + 1);
	};
	const endGuide = () => {
		if (!session || !window.confirm("Skip to the end of this guide? The remaining chemical steps will not be timed.")) return;
		setGuideEndedEarly(true);
		setSession({
			...session,
			running: false,
			remaining,
			endAt: null
		});
		setMode("complete");
	};
	const finishWithoutSaving = () => {
		setGuideEndedEarly(false);
		setSession(null);
		setResult(null);
		setMode("process");
	};
	const updateSetting = (key, value) => setSettings((current) => ({
		...current,
		[key]: value
	}));
	const nav = (next) => {
		setMode(next);
		setCustomRecipeOpen(false);
		setError("");
	};
	const blackboardTotal = batchLoad(filmNumber, rollsAtOnce).blackboardTotal;
	const recipeEditor = customRecipeOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "custom-recipe-form",
		"aria-labelledby": "custom-recipe-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "custom-recipe-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SHARED RECIPE LIBRARY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "custom-recipe-title",
					children: editingRecipeId ? "EDIT RECIPE" : "ADD OR OVERRIDE A TIME"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setCustomRecipeOpen(false);
						setEditingRecipeId(null);
					},
					children: "CLOSE ×"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "custom-recipe-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MANUFACTURER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: recipeDraft.manufacturer,
						onChange: (event) => setRecipeDraft((draft) => ({
							...draft,
							manufacturer: event.target.value
						}))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FILM NAME" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: recipeDraft.filmName,
						onChange: (event) => setRecipeDraft((draft) => ({
							...draft,
							filmName: event.target.value
						}))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DEVELOPER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: recipeDraft.developer,
						onChange: (event) => setRecipeDraft((draft) => ({
							...draft,
							developer: event.target.value
						})),
						children: DEVELOPERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DILUTION" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: recipeDraft.dilution,
						onChange: (event) => setRecipeDraft((draft) => ({
							...draft,
							dilution: event.target.value
						})),
						children: DILUTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EXPOSURE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: recipeDraft.exposureLabel,
						onChange: (event) => setRecipeDraft((draft) => ({
							...draft,
							exposureLabel: event.target.value
						})),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Normal" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Push +1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Push +2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pull -1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Custom EI" })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ISO / EI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: "1",
						value: recipeDraft.exposureIndex,
						onChange: (event) => setRecipeDraft((draft) => ({
							...draft,
							exposureIndex: parseNumericInput(event.target.value)
						}))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BASE TIME AT 20°C" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "compact-unit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: "0.1",
							step: "0.05",
							value: recipeDraft.baseMinutes,
							onChange: (event) => setRecipeDraft((draft) => ({
								...draft,
								baseMinutes: parseNumericInput(event.target.value)
							}))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "MIN" })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SOURCE URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "url",
						value: recipeDraft.sourceUrl,
						onChange: (event) => setRecipeDraft((draft) => ({
							...draft,
							sourceUrl: event.target.value
						})),
						placeholder: "Optional reference link"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "pass-key-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STAFF PASS KEY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							value: recipePassKey,
							onChange: (event) => setRecipePassKey(event.target.value),
							autoComplete: "off",
							placeholder: "Required to save changes"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "custom-notes",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SOURCE / TEST NOTES" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: recipeDraft.sourceNotes,
					onChange: (event) => setRecipeDraft((draft) => ({
						...draft,
						sourceNotes: event.target.value
					})),
					placeholder: "Who tested it, when, and anything staff should know."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "custom-recipe-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: customRecipeStatus || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Saved online as a shared staff recipe. Matching built-in timings are replaced by the shared version." }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: saveCustomRecipe,
					disabled: savingCustomRecipe,
					children: savingCustomRecipe ? "SAVING ONLINE…" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						editingRecipeId ? "UPDATE RECIPE" : "SAVE RECIPE",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })
					] })
				})]
			})
		]
	}) : null;
	const workflowSettingsPanel = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: "workflow-settings",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: ["LAB WORKFLOW & ALERTS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CONFIGURE →" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "settings-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "toggle-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: settings.stopBathEnabled,
						onChange: (event) => updateSetting("stopBathEnabled", event.target.checked)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "USE STOP BATH" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "toggle-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: settings.photoFloEnabled,
						onChange: (event) => updateSetting("photoFloEnabled", event.target.checked)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INCLUDE PHOTO-FLO" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FORMAT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: format,
					onChange: (event) => setFormat(event.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "35mm" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "120" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sheet" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DRAIN WARNING" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "compact-unit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: "0",
						step: "5",
						value: settings.drainWarningSeconds,
						onChange: (event) => updateSetting("drainWarningSeconds", parseNumericInput(event.target.value))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "SEC" })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FIX" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "compact-unit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: "1",
						value: minutesFromSeconds(settings.fixSeconds),
						onChange: (event) => {
							const value = parseNumericInput(event.target.value);
							updateSetting("fixSeconds", value === "" ? "" : value * 60);
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "MIN" })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WASH" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "compact-unit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: "1",
						value: minutesFromSeconds(settings.washSeconds),
						onChange: (event) => {
							const value = parseNumericInput(event.target.value);
							updateSetting("washSeconds", value === "" ? "" : value * 60);
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "MIN" })]
				})] }),
				settings.photoFloEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PHOTO-FLO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "compact-unit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: "5",
						step: "5",
						value: settings.photoFloSeconds,
						onChange: (event) => updateSetting("photoFloSeconds", parseNumericInput(event.target.value))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "SEC" })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "toggle-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: settings.sound,
						onChange: (event) => updateSetting("sound", event.target.checked)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SOUND CUES" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "toggle-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: settings.vibration,
						onChange: (event) => updateSetting("vibration", event.target.checked)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VIBRATION" })]
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: `app-shell mode-${mode}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "garage-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "brand-lockup brand-button",
					type: "button",
					onClick: () => nav("process"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `${APP_BASE_PATH}/saujana-logo.png`,
							alt: "Saujana Film Lab"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "garage-wordmark",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "THE GARAGE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "B&W PROCESSING ROOM" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "header-status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), " THE HOUSE · INTERNAL"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "room-nav",
				"aria-label": "The Garage sections",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: mode === "process" ? "is-active" : "",
						type: "button",
						onClick: () => nav("process"),
						children: "PROCESS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: mode === "recipes" ? "is-active" : "",
						type: "button",
						onClick: () => nav("recipes"),
						children: "RECIPES"
					}),
					session && mode !== "complete" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: mode === "timer" ? "is-active" : "",
						type: "button",
						onClick: () => setMode("timer"),
						children: "ACTIVE TIMER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["ROOM 03 / ", mode === "timer" ? "IN USE" : "OPEN"] })
				]
			}),
			mode === "process" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "chemical-banner",
				"aria-label": "Current black and white developer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `${APP_BASE_PATH}/ilford-id11.svg`,
						alt: "ILFORD ID-11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CURRENT CHEMICAL" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: developer }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: dilution === "Stock" ? "STOCK · ONE LITER · REUSED UP TO 10 ROLLS" : "1+1 · MIX FRESH · ONE-SHOT USE" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "ACTIVE" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "workspace-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "calculator-panel",
					"aria-labelledby": "calculator-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: processKind === "recipe" ? "CHOOSE A RECIPE" : "ENTER YOUR TIME" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								id: "calculator-title",
								children: processKind === "recipe" ? "WHAT ARE WE COOKING?" : "MANUAL TIMER"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "process-kind-switch",
							"aria-label": "Processing mode",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: processKind === "recipe" ? "is-selected" : "",
								type: "button",
								onClick: () => {
									setProcessKind("recipe");
									setError("");
								},
								children: ["RECIPE MODE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CALCULATE FROM THE LIBRARY" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: processKind === "manual" ? "is-selected" : "",
								type: "button",
								onClick: () => {
									setProcessKind("manual");
									setResult(null);
									setError("");
								},
								children: ["TIMER MODE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "USE A TIME YOU ALREADY KNOW" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "recipe-mode-fields",
							hidden: processKind !== "recipe",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "recipe-context-grid",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DEVELOPER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: developer,
										onChange: (event) => selectDeveloper(event.target.value),
										children: DEVELOPERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DILUTION" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: dilution,
										onChange: (event) => selectDilution(event.target.value),
										children: DILUTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "field-block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "film",
											children: "FILM"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "film-select-wrap",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												id: "film",
												value: film,
												onChange: (event) => selectFilm(event.target.value),
												children: filmOptions.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: name,
													children: name
												}, name))
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												children: "↓"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "film-field-help",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [filmOptions.length, " FILMS IN THE LIBRARY"] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => openCustomRecipe(),
												children: "+ ADD ISO / RECIPE"
											})]
										})
									]
								}),
								recipeEditor,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
									className: "field-block exposure-field",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "ISO / EXPOSURE" }),
										availableRecipes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "segmented-control",
											children: availableRecipes.map((recipe) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: recipe.id === recipeId ? "is-selected" : "",
												type: "button",
												onClick: () => {
													setRecipeId(recipe.id);
													setResult(null);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: recipe.exposureLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["ISO ", recipe.exposureIndex] })]
											}, recipe.id))
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "missing-recipe",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
													"NO ",
													dilution.toUpperCase(),
													" TIME YET"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"Add a tested ",
													developer,
													" ",
													dilution,
													" recipe for this film."
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => openCustomRecipe(),
													children: "ADD RECIPE →"
												})
											]
										}),
										availableRecipes.length === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Add another ISO or EI from the Recipes tab when needed." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "two-column-fields",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "field-block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "temperature",
												children: "CHEMISTRY TEMPERATURE"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "unit-input",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "temperature",
													type: "number",
													min: "20",
													max: "25.5",
													step: "0.5",
													value: temperature,
													onChange: (event) => {
														setTemperature(parseNumericInput(event.target.value));
														setResult(null);
													}
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "°C" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "20–24°C official range · 24.5–25.5°C lab extension." })
										]
									}), dilution === "Stock" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "field-block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { children: "ROLL COUNT / FILM NUMBER THROUGH THIS LITER" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "roll-readout",
												children: ["FIRST ROLL FOR DEV TIME ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [filmNumber, " / 10"] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Choose the next number after the current blackboard total." })
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "field-block one-shot-note",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { children: "1+1 WORKING SOLUTION" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "MIX FRESH FOR THIS LOAD" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No stock-batch capacity adjustment is applied." })
										]
									})]
								}),
								dilution === "Stock" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "roll-selector",
									"aria-label": `Development time uses roll ${filmNumber} of this batch`,
									children: Array.from({ length: 10 }, (_, index) => index + 1).map((number) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: number === filmNumber ? "is-selected" : "",
										type: "button",
										onClick: () => {
											setFilmNumber(number);
											setRollsAtOnce((current) => Math.min(current, 11 - number));
											setResult(null);
										},
										children: number
									}, number))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "multi-roll-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "rolls-at-once",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MORE THAN 1 ROLL?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "rolls-at-once",
											value: rollsAtOnce,
											onChange: (event) => {
												setRollsAtOnce(Number(event.target.value));
												setResult(null);
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "1",
													children: "1 roll"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "2",
													disabled: filmNumber > 9,
													children: "2 rolls together"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "3",
													disabled: filmNumber > 8,
													children: "3 rolls together"
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
										"USE ROLL ",
										filmNumber,
										" FOR THE DEV TIME."
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rollsAtOnce > 1 ? `After processing ${rollsAtOnce} together, put ${blackboardTotal} on the blackboard.` : `After processing, put ${blackboardTotal} on the blackboard.` })] })]
								})] }),
								workflowSettingsPanel,
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "error-message",
									role: "alert",
									children: error
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "calculate-button",
									type: "button",
									onClick: calculate,
									children: ["CALCULATE DEVELOPMENT TIME ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
								})
							]
						}),
						processKind === "manual" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "manual-timer-form",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "manual-timer-grid",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FILM / LABEL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: manualFilm,
											onChange: (event) => setManualFilm(event.target.value),
											placeholder: "Optional"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ISO / EI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: "1",
											value: manualIso,
											onChange: (event) => setManualIso(parseNumericInput(event.target.value))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DEVELOPER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: developer,
											onChange: (event) => setDeveloper(event.target.value),
											children: DEVELOPERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DILUTION" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: dilution,
											onChange: (event) => setDilution(event.target.value),
											children: DILUTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DEVELOPMENT TIME" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "compact-unit",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												min: "0.1",
												max: "240",
												step: "0.05",
												value: manualDevelopmentMinutes,
												onChange: (event) => setManualDevelopmentMinutes(parseNumericInput(event.target.value))
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "MIN" })]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CHEMISTRY TEMPERATURE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "compact-unit",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												min: "20",
												max: "25.5",
												step: "0.5",
												value: temperature,
												onChange: (event) => setTemperature(parseNumericInput(event.target.value))
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "°C" })]
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "manual-timer-note",
									children: "This mode uses your exact development time. The usual pour, agitation, stop, fix, and wash guidance stays in place."
								}),
								workflowSettingsPanel,
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "error-message",
									role: "alert",
									children: error
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "calculate-button",
									type: "button",
									onClick: startManualRun,
									children: ["START MANUAL GUIDE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: `result-panel ${processKind === "recipe" && result ? "has-result" : ""}`,
					"aria-live": "polite",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-topline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["02 / ", processKind === "manual" ? "MANUAL GUIDE" : "DEVELOPMENT TIME"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
							developer,
							" · ",
							dilution.toUpperCase()
						] })]
					}), processKind === "manual" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-empty manual-mode-summary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "empty-ring",
								children: typeof manualDevelopmentMinutes === "number" && manualDevelopmentMinutes > 0 ? formatTime(Math.round(manualDevelopmentMinutes * 60)) : "00:00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"YOUR TIME.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"OUR GUIDE."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Enter the development time you already trust. The Garage will handle stage prompts, agitation reminders, alerts, and the screen wake lock." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "DEVELOPER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
								developer,
								" ",
								dilution
							] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "PHOTO-FLO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: settings.photoFloEnabled ? "INCLUDED" : "SKIPPED" })] })] })
						]
					}) : result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "result-title",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									result.recipe.filmName.toUpperCase(),
									" · ISO ",
									result.recipe.exposureIndex
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: formatTime(result.finalSeconds) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: result.finalSeconds !== result.calculatedSeconds ? "STAFF OVERRIDE" : "FINAL DEVELOPMENT TIME" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "calculation-breakdown",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "BASE AT 20°C" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatTime(result.recipe.baseSeconds) })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "TEMPERATURE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: temperature === 20 ? "NO CHANGE" : `${Math.round((result.temperatureFactor - 1) * 100)}% → ${formatTime(result.temperatureAdjustedSeconds)}` })] }),
								result.recipe.dilution === "Stock" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", { children: [
									"ROLL ",
									filmNumber,
									" OF THIS BATCH"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
									"+",
									Math.round((result.capacityMultiplier - 1) * 100),
									"%"
								] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "LOAD / BLACKBOARD AFTER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
									rollsAtOnce,
									" ROLL",
									rollsAtOnce > 1 ? "S" : "",
									" / ",
									blackboardTotal
								] })] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "WORKING SOLUTION" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "1+1 · ONE-SHOT" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "CALCULATED / FINAL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
									formatTime(result.calculatedSeconds),
									" / ",
									formatTime(result.finalSeconds)
								] })] })
							]
						}),
						result.temperatureOutsideOfficialRange && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "temperature-extension-note",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
								"LAB EXTENSION · ",
								temperature,
								"°C"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is above ILFORD’s published 20–24°C chart range. The stored 10%-per-degree method is extended here at Saujana’s direction; staff judgement still takes priority." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reference-note",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
									result.recipe.verificationStatus === "unverified" ? "UNVERIFIED" : "MASSIVE DEV CHART",
									" · ",
									result.recipe.version
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: result.recipe.verificationStatus === "unverified" ? "Staff-entered custom timing. Confirm it against the source notes and lab results before use." : result.recipe.sourceNotes }),
								result.recipe.sourceUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: result.recipe.sourceUrl,
									target: "_blank",
									rel: "noreferrer",
									children: "VIEW SOURCE ↗"
								})
							]
						}),
						manualOverrideOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "override-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STAFF TIME / MINUTES" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: "0.1",
								step: "0.05",
								value: manualMinutes,
								onChange: (event) => setManualMinutes(event.target.value)
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								type: "button",
								onClick: applyOverride,
								children: "APPLY"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: startRun,
							children: ["START TIMER ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "secondary-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setResult(null),
								children: "EDIT INPUTS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setManualOverrideOpen((open) => !open),
								children: "MANUAL OVERRIDE"
							})]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-empty",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "empty-ring",
								children: "00:00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"READY WHEN",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"YOU ARE."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Choose the developer, dilution, film, ISO, temperature, and stock-batch position. The calculation will show its work here." })
						]
					})]
				})]
			})] }),
			mode === "recipes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "recipe-library-view",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "recipe-library-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SHARED RECIPE LIBRARY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
								"FILM TIMES,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"READY TO EDIT."
							] })] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: () => openCustomRecipe(),
							children: "+ ADD ISO / RECIPE"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "recipe-library-intro",
						children: "Add push, pull, custom EI, Stock, or 1+1 timings. Shared edits appear for staff after refresh. Notes stay with each recipe. A staff pass key is required for every change."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "recipe-library-filter",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "recipe-library-film",
							children: "FILM"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "film-select-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "recipe-library-film",
								value: film,
								onChange: (event) => selectFilm(event.target.value),
								children: filmOptions.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: name,
									children: name
								}, name))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "↓"
							})]
						})]
					}),
					recipeEditor,
					!customRecipeOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "recipe-key-bar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STAFF PASS KEY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							value: recipePassKey,
							onChange: (event) => setRecipePassKey(event.target.value),
							autoComplete: "off",
							placeholder: "Required to edit or delete"
						})]
					}),
					customRecipeStatus && !customRecipeOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "recipe-library-status",
						role: "status",
						children: customRecipeStatus
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "recipe-card-list",
						children: allRecipes.filter((recipe) => recipe.filmName === film).map((recipe) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "recipe-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "recipe-card-main",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: recipe.id.startsWith("shared-") ? "SHARED STAFF RECIPE" : "BUILT-IN REFERENCE" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
											recipe.exposureLabel,
											" · ISO ",
											recipe.exposureIndex
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											recipe.developer,
											" · ",
											recipe.dilution.toUpperCase(),
											" · BASE ",
											formatTime(recipe.baseSeconds),
											" AT 20°C"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "recipe-card-notes",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: recipe.sourceNotes || "No notes added." })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "recipe-card-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => openCustomRecipe(recipe),
										children: "EDIT"
									}), recipe.id.startsWith("shared-") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "is-danger",
										type: "button",
										onClick: () => deleteCustomRecipe(recipe),
										children: "DELETE"
									})]
								})
							]
						}, recipe.id))
					})
				]
			}),
			mode === "timer" && session && stage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimerView, {
				session,
				stage,
				stages,
				remaining,
				stageComplete,
				onPauseResume: pauseResume,
				onAddTime: addTime,
				onRestart: restartStage,
				onSkip: skipStage,
				onEndGuide: endGuide,
				onNext: () => enterStage(session.stageIndex + 1)
			}),
			mode === "complete" && session && (guideEndedEarly ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "completion-view guide-ended-view",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "completion-mark",
						children: "↘"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro-label",
						children: "DEV GUIDE / ENDED"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"GUIDE DONE.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CONTINUE MANUALLY." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The remaining chemical steps were not timed. Complete them using the lab workflow." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "completion-form",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: finishWithoutSaving,
							children: ["BACK TO PROCESS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "completion-view",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "completion-mark",
						children: "✓"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro-label",
						children: "PROCESS COMPLETE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"ROLL DONE.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NICE WORK." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: session.settings.photoFloEnabled ? "The Photo-Flo step is complete." : "The wash is complete. Add Photo-Flo or a drop of dish soap separately when needed." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "completion-form",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: finishWithoutSaving,
							children: ["BACK TO PROCESS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
						})
					})
				]
			})),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "instrument-footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "B&W NEGATIVE · ID-11 · STOCK + 1+1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE GARAGE / SAUJANA FILM LAB" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "V2 · RECIPE LIBRARY" })
				]
			})
		]
	});
}
function TimerView({ session, stage, stages, remaining, stageComplete, onPauseResume, onAddTime, onRestart, onSkip, onEndGuide, onNext }) {
	const elapsed = Math.max(0, session.duration - remaining);
	const minutePosition = elapsed % 60;
	const agitationMode = stage.agitationMode ?? "none";
	const isIntervalAgitation = elapsed < 10 || elapsed >= 60 && minutePosition < 10;
	const isAgitating = session.running && !stageComplete && (agitationMode === "continuous" || agitationMode === "interval" && isIntervalAgitation);
	const nextAgitation = agitationMode === "interval" && !isAgitating ? Math.max(0, 60 - minutePosition) : 0;
	const warning = stage.key === "develop" && remaining > 0 && remaining <= session.settings.drainWarningSeconds;
	const progressKeys = stages.map((item) => item.progressKey).filter((key, index, keys) => keys.indexOf(key) === index);
	const activeProgress = progressKeys.indexOf(stage.progressKey);
	const showStockBatch = !session.manualTiming && session.result.recipe.dilution === "Stock";
	const progress = stage.duration ? Math.max(0, Math.min(1, remaining / session.duration)) : 1;
	const nextLabel = stages[session.stageIndex + 1]?.label ?? "Complete";
	const fullscreen = () => document.documentElement.requestFullscreen?.().catch(() => void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `timer-view ${isAgitating ? "is-agitating" : ""} ${stageComplete ? "is-complete" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "timer-progress",
				style: { gridTemplateColumns: `repeat(${progressKeys.length}, 1fr)` },
				"aria-label": "Processing progress",
				children: progressKeys.map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: index < activeProgress ? "is-done" : index === activeProgress ? "is-current" : "",
					children: key === "photoflo" ? "PHOTO-FLO" : key.toUpperCase()
				}, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "timer-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "timer-information",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "timer-topline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								String(session.stageIndex + 1).padStart(2, "0"),
								" / ",
								stage.label.toUpperCase()
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "timer-top-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "end-guide-button",
									type: "button",
									onClick: onEndGuide,
									children: "SKIP TO END ↘"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: fullscreen,
									children: "FULLSCREEN ↗"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "timer-readout",
							children: stage.duration ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: stageComplete ? "STAGE COMPLETE" : session.running ? "TIME REMAINING" : "PAUSED" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: formatTime(remaining) })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "MANUAL STEP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "READY" })] })
						}),
						warning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "drain-warning",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [remaining, " SECONDS LEFT."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "START DRAINING." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "current-instruction",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CURRENT INSTRUCTION" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: stageComplete ? `${stage.label} complete. Check the tank before moving on.` : stage.instruction }),
								stage.agitation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: stage.agitation })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "run-metadata",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "FILM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [session.result.recipe.filmName, session.result.recipe.exposureIndex > 0 ? ` · ISO ${session.result.recipe.exposureIndex}` : ""] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "DEVELOPER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
									session.result.recipe.developer,
									" ",
									session.result.recipe.dilution
								] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "TEMPERATURE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [session.temperature, "°C"] })] }),
								session.manualTiming && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "TIMING" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "MANUAL STAFF TIME" })] }),
								showStockBatch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "DEV TIME USES" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
										"ROLL ",
										session.filmNumber,
										" OF THIS BATCH"
									] })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "ROLLS IN TANK" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: session.rollsAtOnce ?? 1 })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "BLACKBOARD AFTER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: batchLoad(session.filmNumber, session.rollsAtOnce ?? 1).blackboardTotal })] })
								] }),
								!session.manualTiming && !showStockBatch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "WORKING SOLUTION" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "ONE-SHOT 1+1" })] })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "tank-zone",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `tank-state ${isAgitating ? "is-moving" : ""}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: `${APP_BASE_PATH}/developing-tank.png`,
								alt: "Developing tank"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "agitation-message",
							children: isAgitating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "AGITATE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: agitationMode === "continuous" ? "INVERT THE TANK OR TURN THE CENTER STICK" : "INVERT OR USE THE CENTER STICK · 10-SECOND CYCLE" })] }) : agitationMode === "interval" && !stageComplete ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: session.running ? "LET IT REST" : "PAUSED" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: session.running ? `NEXT AGITATION IN ${formatTime(nextAgitation)}` : "RESUME WHEN READY" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stageComplete ? "HOLD" : stage.label.toUpperCase() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stageComplete ? "WAITING FOR STAFF CONFIRMATION" : "FOLLOW THE CURRENT INSTRUCTION" })] })
						}),
						stage.duration && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "timer-meter",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { transform: `scaleX(${progress})` } })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "timer-controls",
				children: stage.duration && !stageComplete ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						type: "button",
						onClick: onPauseResume,
						children: session.running ? "PAUSE" : "RESUME"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						type: "button",
						onClick: onAddTime,
						children: "+ 30 SEC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "quiet",
						type: "button",
						onClick: onRestart,
						children: "RESTART STAGE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "danger",
						type: "button",
						onClick: onSkip,
						children: "SKIP"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "next-stage-button",
					type: "button",
					onClick: onNext,
					children: [
						stage.duration ? `START ${nextLabel.toUpperCase()}` : stage.key === "pour" ? "DEVELOPER POURED · START DEVELOP" : `START ${nextLabel.toUpperCase()}`,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })
					]
				})
			})
		]
	});
}
//#endregion
export { GarageApp };
