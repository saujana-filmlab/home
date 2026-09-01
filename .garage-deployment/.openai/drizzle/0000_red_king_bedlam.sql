CREATE TABLE `custom_recipes` (
	`id` text PRIMARY KEY NOT NULL,
	`manufacturer` text NOT NULL,
	`film_name` text NOT NULL,
	`format_json` text NOT NULL,
	`exposure_label` text NOT NULL,
	`exposure_index` integer NOT NULL,
	`base_seconds` integer NOT NULL,
	`source_url` text DEFAULT '' NOT NULL,
	`source_notes` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_custom_recipes_film_name` ON `custom_recipes` (`film_name`);