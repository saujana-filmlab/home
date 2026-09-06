CREATE TABLE `chemical_usage` (
	`location` text PRIMARY KEY NOT NULL,
	`used_rolls` integer DEFAULT 0 NOT NULL,
	`batch_number` integer DEFAULT 1 NOT NULL,
	`updated_at` text NOT NULL
);
