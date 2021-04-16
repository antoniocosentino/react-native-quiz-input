//
//  RNQuizInputModule.swift
//  RNQuizInputModule
//
//  Copyright © 2021 Antonio Cosentino. All rights reserved.
//

import Foundation

@objc(RNQuizInputModule)
class RNQuizInputModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
