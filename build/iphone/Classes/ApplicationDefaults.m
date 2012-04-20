/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"lcPIKUpIhQHwrwThiucUeBbCGqXJLO3I"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"x9JoGtLl9xSTkl11AVYZqAZ17ayGfbfK"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"a3MUT6NckWmszd3DOmdBvHwds1vlwRqu"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"0IytaNExdWKbRcxa1ED6aBOoXAJW3zN5"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"FEXRCGvaUU9HSdta22Etd1MEs16DYzb3"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"Mz0Wgi7Dk8lI6ZbdTuWQc30YULncCusd"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
