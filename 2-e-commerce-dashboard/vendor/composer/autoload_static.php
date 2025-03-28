<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5e7c99c4e6e9598b86ef2ff3254f1efb
{
    public static $files = array (
        '94375450de17f2fe6e76c6bb2b977e59' => __DIR__ . '/../..' . '/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5e7c99c4e6e9598b86ef2ff3254f1efb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5e7c99c4e6e9598b86ef2ff3254f1efb::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5e7c99c4e6e9598b86ef2ff3254f1efb::$classMap;

        }, null, ClassLoader::class);
    }
}
