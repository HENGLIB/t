    // Example of limiting login attempts
    $maxAttempts = 5;
    $lockoutTime = 15 * 60; // 15 minutes

    if ($failedAttempts >= $maxAttempts && (time() - $lastAttemptTime) < $lockoutTime) { // Account is locked } else {
        // Allow login attempt }