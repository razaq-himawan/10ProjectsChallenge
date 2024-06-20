<?php

namespace App;

function generateUUID(): string
{
    $uuid = vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex(random_bytes(16)), 4));
    return $uuid;
}
